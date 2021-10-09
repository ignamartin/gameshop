const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

const validate = require('../middleware/validator');

// Set Routes
// Index Route
router.get('/', mainController.index);

// Product Details Route
router.get('/productDetails', mainController.detail);

// Cart Details Route
router.get('/cart', mainController.cart);

// Login Route
router.get('/login', mainController.login);
// Login User
router.post('/login', mainController.loginUser);

// Register Route
router.get('/register', mainController.register);
// Create New User
router.post('/register', validate.validateRegister, mainController.createUser);

module.exports = router;