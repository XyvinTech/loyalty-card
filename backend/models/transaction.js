const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  market: {
    type: String,
  },
  loyality: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Loyality',
    required: true
  },
  customer_details: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "pending",
    enum: ["success", "failed", "pending"],
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);