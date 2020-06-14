const merchantModel = require('../models/merchant');

class MerchantController {
  async store(req, res) {
    const merchant = await merchantModel.create(req.body);

    return res.status(201).json(merchant);
  }
  async findAll(req, res) {
    const merchant = await merchantModel.find();

    return res.status(200).json(merchant);
  }
  s;
  async findByLocation({ params: { lat, long } }, res) {
    const merchants = await merchantModel.find();
    const area = 0.05;

    const merchantsFiltered = merchants.filter((merchant) => {
      return (
        merchant.latitude > lat - area &&
        merchant.latitude < lat + area &&
        merchant.longitude > long - area &&
        merchant.longitude < long + area
      );
    });

    return res.status(200).json(merchantsFiltered);
  }
}

module.exports = new MerchantController();
