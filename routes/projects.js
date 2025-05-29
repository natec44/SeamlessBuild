const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');

// GET all projects
router.get('/', projectController.getAllProjects);

// GET single project
router.get('/:id', projectController.getProjectById);

// POST create new project
router.post('/', projectController.createProject);

// PUT update project
router.put('/:id', projectController.updateProject);

// DELETE project
router.delete('/:id', projectController.deleteProject);

module.exports = router;
