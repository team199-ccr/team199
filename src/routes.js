const routes = require('express').Router();
const TruckerController = require('./app/controllers/TruckerController');
const MainController = require('./app/controllers/MainController');
const MerchantController = require('./app/controllers/MerchantController');

const authMid = require('./app/middlewares/auth');

routes.get('/', (req, res) => {
  res.json({ msg: 'Rango API OK!' });
});

routes.post('/trucker', TruckerController.store);
routes.post('/merchant', MerchantController.store);
routes.get('/merchants/', MerchantController.findAll);
routes.put('/merchant/:id', MerchantController.update);
routes.get('/merchants/:lat/:long', MerchantController.findByLocation);
routes.get(`/telephone/:telephone`, MainController.findOne);

routes.use(authMid);

module.exports = routes;
