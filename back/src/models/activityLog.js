const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    electricityBill: { type: Number },
    gasBill: { type: Number },
    oilBill: { type: Number },
    carMileage: { type: Number },
    shortFlights: { type: Number },
    longFlights: { type: Number },
    recycleNewspaper: { type: Boolean },
    recycleAluminum: { type: Boolean },
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
