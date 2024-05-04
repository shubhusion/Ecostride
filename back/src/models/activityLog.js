const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    electricityBill: Number,
    gasBill: Number,
    oilBill: Number,
    carMileage: Number,
    shortFlights: Number,
    longFlights: Number,
    recycleNewspaper: Boolean,
    recycleAluminum: Boolean,
    totalFootprint: { type: Number, required: true },
    category: String,
    activityDate: { type: Date, required: true },
    description: String
  },
  {
    timestamps: true,
  }
);

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = ActivityLog;
