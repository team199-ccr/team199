const merchantModel = require('../models/merchant');

class MerchantController {
  async store(req, res) {
    const merchant = await merchantModel.create(req.body);

    return res.status(201).json(merchant);
  }
}

module.exports = new MerchantController();
