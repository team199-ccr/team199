const truckerModel = require('../models/trucker');
const merchantModel = require('../models/merchant');

class MainController {
  async findOne(req, res) {
    const truckerTel = await truckerModel.findOne({
      telephone: req.params.telephone,
    });
    const merchantTel = await merchantModel.findOne({
      telephone: req.params.telephone,
    });

    if (truckerTel == null && merchantTel !== null) {
      return res.json(merchantTel);
    } else if (truckerTel !== null) {
      return res.json(truckerTel);
    } else {
      res.status(404).send('User not found');
    }
  }

  async findAll(req, res) {
    const truckers = await truckerModel.find();

    return res.json(truckers);
  }
}

module.exports = new MainController();
