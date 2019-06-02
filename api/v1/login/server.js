const { getDatabaseModels } = require('../../../core/database');
const { createSha1 } = require('../../../helpers/crypto');
const { getDateNowUtc } = require('../../../helpers/moment');
const { exists } = require('../../../helpers/object');

module.exports = router => {
  router.post('/', async (req, res) => {
    const db = getDatabaseModels('appointrip');
    logger.debug(`New login !`);

    if (!exists(['token'], req.body)) {
      return res.customJson({}, 400, 'Error body (token)');
    }
    const { token } = req.body;
    const accessToken = await db.access_token.findOne({ where: { token, flag_delete: 0 } });

    if (!accessToken) {
      return res.customJson({}, 400, 'This token does not exist');
    }

    const account = await db.users.findOne({ where: { userID: accessToken.user_id } });
    if (!account) {
      return res.customJson({}, 400, 'Account not found');
    }

    const sha1 = createSha1(account.email);
    await db.tbl_token_payment.update({ flag_delete: 1, statut: 0 }, { where: { user_id: account.userID } });
    await db.tbl_token_payment.create({
      token: sha1,
      statut: 1,
      lifetime_max: getDateNowUtc().add(1, 'month').toDate(),
      action_nb: 0,
      action_max: 10,
      user_id: account.userID,
      flag_delete: 0,
      created_at: getDateNowUtc().toDate(),
      updated_at: getDateNowUtc().toDate(),
    });

    res.customJson({ token: sha1 });
  });
  return router;
}