const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks');

// GET all tasks for a project
router.get('/:projectId', taskController.getTasks);

// POST a new task
router.post('/', taskController.createTask);

// PUT update a task
router.put('/:taskId', taskController.updateTask);

// DELETE a task
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
