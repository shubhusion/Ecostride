const ActivityLog = require('../models/activityLog');

// Create a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const { activityType, activityDate, rewardPoints, description } = req.body;
    const activityLog = await ActivityLog.create({
      userId: req.user._id,
      activityType,
      activityDate,
      rewardPoints,
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