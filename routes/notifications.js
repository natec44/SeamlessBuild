const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notifications');

// GET user notifications
router.get('/', notificationController.getNotifications);

// POST create notification
router.post('/', notificationController.createNotification);

// PUT mark as read
router.put('/:id', notificationController.markAsRead);

// DELETE notification
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;
