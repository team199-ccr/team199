const truckerModel = require('../models/trucker');

class MainController {
  async findOne(req, res) {
    console.log(req.params);

    try {
      const truckerTel = await truckerModel.findOne({
        telephone: req.params.telephone,
      });

      if (truckerTel === null) {
        res.status(404).send('User not found');
      }
      return res.json(truckerTel);
    } catch (e) {
      console.log('Error: ', e);
      return {};
    }
  }
}

module.exports = new MainController();
