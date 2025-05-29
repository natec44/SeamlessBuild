// server/controllers/vendors.js
const Vendor = require('../models/Vendor');

exports.getVendors = async (req, res, next) => {
  try {
    const vendors = await Vendor.find({ projectId: req.params.projectId });
    res.json(vendors);
  } catch (error) {
    next(error);
  }
};

exports.addVendor = async (req, res, next) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json(newVendor);
  } catch (error) {
    next(error);
  }
};

exports.updateVendor = async (req, res, next) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(req.params.vendorId, req.body, { new: true });
    res.json(updatedVendor);
  } catch (error) {
    next(error);
  }
};

exports.deleteVendor = async (req, res, next) => {
  try {
    await Vendor.findByIdAndDelete(req.params.vendorId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
