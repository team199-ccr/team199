const truckerModel = require('../models/trucker');
const merchantModel = require('../models/merchant');
const { update } = require('../models/trucker');

class TruckerController {
  async store(req, res) {
    const trucker = await truckerModel.create(req.body);

    return res.status(201).json(trucker);
  }
}

module.exports = new TruckerController();
