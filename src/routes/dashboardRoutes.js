const express = require('express');

const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

// Set Admin Routes
// Dashboard Admin
router.get('/', dashboardController.dashboard);

router.get('/create', dashboardController.create);

router.post('/store', dashboardController.store);


module.exports = router;