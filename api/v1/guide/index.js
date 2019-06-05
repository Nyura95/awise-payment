const { createAccountStripe } = require('../../../helpers/request');

module.exports = router => {
  router.post('/transfer', async (req, res) => {
    try {

      if (result.error) {

      }

      // return res.customJson({ ...result }, 400, 'Error call stripe');
      res.customJson('ok');
    } catch (err) {
      return res.customJson({ message: err.message }, 400, 'Error create account');
    }
  });
  return router;
};
