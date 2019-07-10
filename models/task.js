const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: String,
  asset: {
    type: mongoose.Schema.ObjectId,
    ref: "Asset"
  },
  worker: {
    type: mongoose.Schema.ObjectId,
    ref: "Worker"
  },
  timeOfAllocation: String,
  deadline: String,
  assigned: { type: Boolean, default: false },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", taskSchema);
