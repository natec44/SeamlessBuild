const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// GET all users
router.get('/users', adminController.getAllUsers);

// PUT update user role
router.put('/users/:id/role', adminController.updateUserRole);

// DELETE user
router.delete('/users/:id', adminController.deleteUser);

// GET system metrics
router.get('/metrics', adminController.getSystemMetrics);

module.exports = router;
