const ActivityLog = require('../models/activityLog');
const User = require('../models/user'); // Import the User model
// Create a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const { activityType, activityDate, description } = req.body;
    const activityLog = await ActivityLog.create({
      category: activityType,
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
    const activityLogs = await ActivityLog.find({});
    res.json(activityLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getActivityLogsByDate = async (req, res) => {
  try {
    const { date } = req.body; // Assuming date is passed as a body parameter
    
    // If date is provided, create a date range for the entire day
    let startOfDay, endOfDay;
    if (date) {
      startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); // Set to beginning of the day
      endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999); // Set to end of the day
    }

    let activityLogs;

    if (date) {
      // If date is provided, filter activity logs by that date range
      activityLogs = await ActivityLog.find({
        activityDate: {
          $gte: startOfDay,
          $lt: endOfDay
        }
      });
    } else {
      // If no date provided, retrieve all activity logs
      activityLogs = await ActivityLog.find({});
    }

    res.json(activityLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Calculate carbon footprint
exports.calculatecarbonFootprint = async (req, res) => {
  try {
    const {
      electricityBill,
      gasBill,
      oilBill,
      carMileage,
      shortFlights,
      longFlights,
      recycleNewspaper,
      recycleAluminum,
    } = req.body;

    const totalFootprint = calculateTotalFootprint(req.body);
    const category = determineCategory(totalFootprint);

    const activityLog = new ActivityLog({
      electricityBill,
      gasBill,
      oilBill,
      carMileage,
      shortFlights,
      longFlights,
      recycleNewspaper,
      recycleAluminum,
      totalFootprint,
      category,
      activityDate: new Date(),
    });

    await activityLog.save();

    res.json({ totalFootprint, category });
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