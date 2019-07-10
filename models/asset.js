const mongoose = require("mongoose");
const assetSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Asset", assetSchema);
