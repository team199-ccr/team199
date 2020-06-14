const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const MailController = require('./app/controllers/MailController');
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
routes.get('/merchants/:lat/:long', MerchantController.findByLocation);
routes.get(`/telephone/:telephone`, MainController.findOne);

routes.use(authMid);

routes.post('/mail', MailController.store);

module.exports = routes;
