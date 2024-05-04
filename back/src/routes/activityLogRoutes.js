const express = require('express');
const router = express.Router();
const { createActivityLog, getUserActivityLogs  , calculatecarbonFootprint , getCarbonFootprints} = require('../controllers/activityLogController');
const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
// Create a new activity log
router.post('/', createActivityLog);

// Get user's activity logs
router.get('/', authenticateJWT , getUserActivityLogs);

router.post('/calculate-carbon-footprint' , calculatecarbonFootprint);

router.get('/calculate-carbon-footprint' , getCarbonFootprints);



module.exports = router;