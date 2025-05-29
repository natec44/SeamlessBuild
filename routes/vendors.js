// server/routes/vendors.js
const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendors');

// GET all vendors for a project
router.get('/:projectId', vendorController.getVendors);

// POST add a new vendor
router.post('/', vendorController.addVendor);

// PUT update a vendor
router.put('/:vendorId', vendorController.updateVendor);

// DELETE a vendor
router.delete('/:vendorId', vendorController.deleteVendor);

module.exports = router;
