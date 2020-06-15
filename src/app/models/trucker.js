const mongoose = require('../../config/mongodb');

const TruckerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
      unique: true,
    },
    consent: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trucker = mongoose.model('Trucker', TruckerSchema);
module.exports = Trucker;
