const express = require('express');
const router = express.Router();
const { createActivityLog, getUserActivityLogs } = require('../controllers/activityLogController');

// Create a new activity log
router.post('/', createActivityLog);

// Get user's activity logs
router.get('/', getUserActivityLogs);

module.exports = router;