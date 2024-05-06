const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors =require('cors')
mongoose =require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/cf');
    console.log('db connected')
}

const userSchema = new mongoose.Schema({
    electricityBill: Number,
    gasBill: Number,
    oilBill: Number,
    carMileage: Number,
    shortFlights: Number,
    longFlights: Number,
    recycleNewspaper: Boolean,
    recycleAluminum: Boolean,
    totalFootprint: Number,
    category: String,
});

const User = mongoose.model('User',userSchema);

const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/calculate-carbon-footprint',async (req, res) => {
  let user= new User();
  const data = req.body;
  const totalFootprint = calculateTotalFootprint(data);
  const category = determineCategory(totalFootprint);
  user.electricityBill= req.body.electricBill;
  user.gasBill= req.body.gasBill;
  user.oilBill= req.body.oilBill;
  user.carMileage= req.body.carMileage;
  user.shortFlights= req.body.shortFlights;
  user.longFlights= req.body.longFlights;
  user.recycleNewspaper= req.body.recycleNewspaper;
  user.recycleAluminum= req.body.recycleAluminum;
  user.totalFootprint= req.body.totalFootprint;
  user.category= req.body.category;
  const doc = await user.save();
  console.log(doc);
  res.json({ totalFootprint, category });
});

function calculateTotalFootprint(data) {
  const electricityFootprint = data.electricBill * 105;
  const gasFootprint = data.gasBill * 105;
  const oilFootprint = data.oilBill * 113;
  const carFootprint = data.carMileage * 0.79;
  const shortFlightsFootprint = data.shortFlights * 1100;
  const longFlightsFootprint = data.longFlights * 4400;

  let totalFootprint = electricityFootprint + gasFootprint + oilFootprint +
    carFootprint + shortFlightsFootprint + longFlightsFootprint;

  if (!data.recycleNewspaper) {
    totalFootprint += 184;
  }

  if (!data.recycleAluminum) {
    totalFootprint += 166;
  }

  return totalFootprint;
}

function determineCategory(totalFootprint) {
  if (totalFootprint < 6000) {
    return 'Very Low';
  } else if (totalFootprint < 16000) {
    return 'Low';
  } else if (totalFootprint < 22000) {
    return 'Average';
  } else {
    return 'High';
  }
}

/***payment getWay */
// console.log(process.env.STRIPE_SECRET_KEY)


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


app.post("/create-checkout-session",async(req,res)=>{

     try{
      const params = {
          submit_type : 'pay',
          mode : "payment",
          payment_method_types : ['card'],
          billing_address_collection : "auto",
          shipping_options : [{shipping_rate : "shr_1PClDiSH4DvIsyO7wbYA43eU"}],

          line_items : req.body.map((item)=>{
            return{
              price_data : {
                currency : "inr",
                product_data : {
                  name : item.name,
                  //images : [item.image]
                },
                unit_amount : item.price * 100,
              },
              adjustable_quantity : {
                enabled : true,
                minimum : 1,
              },
              quantity : item.qty
            }
          }),

          success_url : `${process.env.FRONTEND_URL}/success`,
          cancel_url : `${process.env.FRONTEND_URL}/cancel`,


      }

      
      const session = await stripe.checkout.sessions.create(params)
      console.log(session)
      res.status(200).json(session.id)
     }
     catch (err){
        res.status(err.statusCode || 500).json(err.message)
     }

})


app.get('/calculate-carbon-footprint', async (req,res)=>{
    const docs= await User.find({});
    res.json(docs);
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
