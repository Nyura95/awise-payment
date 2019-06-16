const { createAccountStripe } = require('../../../helpers/request');

module.exports = router => {
  router.post('/connect', async (req, res) => {
    try {
      const { code, error } = req.params;
    } catch (err) {
      return res.customJson({ message: err.message }, 400, 'Error create account');
    }
  });
  return router;
};
