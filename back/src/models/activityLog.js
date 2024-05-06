const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema(
  {
    electricityBill: { type: Number },
    gasBill: { type: Number },
    oilBill: { type: Number },
    carMileage: { type: Number },
    shortFlights: { type: Number },
    longFlights: { type: Number },
    recycleNewspaper: { type: Boolean },
    recycleAluminum: { type: Boolean },
    totalFootprint: { type: Number },
    category: { type: String },
    activityDate: { type: Date, required: true, default: formatDate },
    description: { type: String }
  },
  {
    timestamps: true,
  }
);

// Function to format date as "2024-05-06" without time
function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = ActivityLog;
