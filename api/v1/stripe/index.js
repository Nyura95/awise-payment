const { createAccountStripe } = require('../../../helpers/request');
const { getDatabaseModels } = require('../../../core/database');

module.exports = router => {
  router.get('/account/authorize', async (req, res) => {
    try {
      const { code, error } = req.query;
      if (error) {
        return res.customJson({ ...result }, 400, 'Error call stripe');
      }
      const db = getDatabaseModels('appointrip');
      const result = await createAccountStripe(code);
      if (result.error) {
        return res.customJson({ ...result }, 400, 'Error call stripe');
      }
      await db.tbl_connect_guide.create({
        connect_token: code,
        id_guide: 0,
        stripe_user_id: result.stripe_user_id,
        stripe_publishable_key: result.stripe_publishable_key,
        scope: result.scope,
        refresh_token: result.refresh_token,
        access_token: result.access_token,
      });
      res.customJson('ok');
    } catch (err) {
      return res.customJson({ message: err.message }, 400, 'Error create account');
    }
  });
  return router;
};
