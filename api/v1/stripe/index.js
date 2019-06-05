const { createAccountStripe } = require('../../../helpers/request');

module.exports = router => {
  router.get('/account', async (req, res) => {
    try {
      const result = await createAccountStripe(req.query.code);
      if (result.error) {
        return res.customJson({ ...result }, 400, 'Error call stripe');
      }
      res.customJson('ok');
    } catch (err) {
      return res.customJson({ message: err.message }, 400, 'Error create account');
    }
  });
  return router;
};
