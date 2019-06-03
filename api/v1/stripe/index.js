const { checkToken } = require('../../../middleware');
const { getDatabaseModels } = require('../../../core/database');
const { createCharge, createAccount } = require('../../../helpers/stripe');

module.exports = router => {
  router.get('/', async (req, res) => {
    const charge = await createAccount('Test', 'taxisoopya@hotmail.fr');
    res.customJson(charge);
  });

  return router;
};
