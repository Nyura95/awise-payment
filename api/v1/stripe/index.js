const { checkToken } = require('../../../middleware');
const { getDatabaseModels } = require('../../../core/database');
const { createCharge, createAccount } = require('../../../helpers/stripe');

module.exports = router => {
  router.get('/account', async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    res.customJson('ok');
  });

  return router;
};
