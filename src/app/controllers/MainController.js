const truckerModel = require('../models/trucker');

class MainController {
  async findOne(req, res) {
    const truckerTel = await truckerModel.findOne({
      telephone: req.params.telephone,
    });

    if (truckerTel === null) {
      res.status(404).send('User not found');
    }

    return res.json(truckerTel);
  }

  async findAll(req, res) {
    const truckers = await truckerModel.find();

    return res.json(truckers);
  }
}

module.exports = new MainController();
