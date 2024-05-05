const express = require('express');
const router = express.Router();
const { createActivityLog, getUserActivityLogs  , calculatecarbonFootprint , getCarbonFootprints} = require('../controllers/activityLogController');
const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
// Create a new activity log
router.post('/', authenticateJWT , createActivityLog);

// Get user's activity logs
router.get('/', authenticateJWT , getUserActivityLogs);

router.post('/calculate-carbon-footprint' , authenticateJWT ,calculatecarbonFootprint);

router.get('/calculate-carbon-footprint' , authenticateJWT , getCarbonFootprints);

module.exports = router;