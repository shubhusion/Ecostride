const express = require('express');
const router = express.Router();
const { createActivityLog, getUserActivityLogs  , calculatecarbonFootprint , getCarbonFootprints , getActivityLogsByDate} = require('../controllers/activityLogController');
const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
// Create a new activity log
router.post('/',createActivityLog);

// Get user's activity logs
router.get('/', getUserActivityLogs);

router.post('/calculate-carbon-footprint' , calculatecarbonFootprint);

router.get('/calculate-carbon-footprint' , getCarbonFootprints);

router.post('/find/', getActivityLogsByDate);
module.exports = router;