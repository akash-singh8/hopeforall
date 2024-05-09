const mongoose = require("mongoose");

const raiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fundRaised: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
});

const RaiseFund = mongoose.model("raisefund", raiseSchema);

export default RaiseFund;
