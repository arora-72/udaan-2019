const mongoose = require("mongoose");
const workerSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Worker", workerSchema);
