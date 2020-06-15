const mongoose = require('../../config/mongodb');

const MerchantSchema = mongoose.Schema(
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
    store_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
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

const Merchant = mongoose.model('Merchant', MerchantSchema);
module.exports = Merchant;
