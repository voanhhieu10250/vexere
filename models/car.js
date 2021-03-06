const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
    licensePlate: String,
    seats: Number,
    status: {
      type: String,
      default: "inactive",
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
