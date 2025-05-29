const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: String,
  email: String,
  phone: String,
  materials: [
    {
      name: String,
      quantity: Number,
      cost: Number,
      shipDate: Date,
      deliveryDate: Date
    }
  ],
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vendor', VendorSchema);
