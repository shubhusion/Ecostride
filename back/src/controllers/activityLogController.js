const ActivityLog = require('../models/activityLog');
const User = require('../models/user'); // Import the User model
// Create a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const { activityType, activityDate, description } = req.body;
    const activityLog = await ActivityLog.create({
      userId: req.user._id,
      activityType,
      activityDate,
      description,
    });
    res.status(201).json(activityLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user's activity logs
exports.getUserActivityLogs = async (req, res) => {
  try {
    const activityLogs = await ActivityLog.find({ userId: req.user._id });
    res.json(activityLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Calculate carbon footprint
exports.calculatecarbonFootprint = async (req, res) => {
  try {
    const data = req.body;
    const totalFootprint = calculateTotalFootprint(data);
    const category = determineCategory(totalFootprint);
    
    // Fetch user from request or database
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    user.electricityBill = req.body.electricBill;
    user.gasBill = req.body.gasBill;
    user.oilBill = req.body.oilBill;
    user.carMileage = req.body.carMileage;
    user.shortFlights = req.body.shortFlights;
    user.longFlights = req.body.longFlights;
    user.recycleNewspaper = req.body.recycleNewspaper;
    user.recycleAluminum = req.body.recycleAluminum;
    user.totalFootprint = totalFootprint;
    user.category = category;

    // Save user data
    const updatedUser = await user.save();
    res.json({ totalFootprint, category, user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get carbon footprint of all users
exports.getCarbonFootprints = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users.map(user => ({ 
      _id: user._id,
      username: user.username,
      totalFootprint: user.totalFootprint,
      category: user.category 
    })));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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