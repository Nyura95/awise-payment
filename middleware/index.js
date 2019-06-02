const { getDatabaseModels } = require('../core/database');

exports.checkToken = async (req, res, next) => {
  // check if token is here
  if (!req.headers.authorization) {
    return res.customJson({}, 401, 'You must give me a token');
  }

  try {
    // Get token
    let token = req.headers.authorization;

    if (!token) {
      return res.customJson({}, 401, 'Token needed');
    }

    const db = getDatabaseModels('appointrip');

    const access_token = await db.tbl_token_payment.findOne({ where: { token: token, flag_delete: 0 } });
    if (!access_token) {
      return res.customJson({}, 401, 'Token is bad');
    }
    const user = await db.users.findOne({ where: { userID: access_token.user_id } });
    if (!user) {
      return res.customJson({}, 401, 'User not found');
    }
    req.user = user;
    next();

  } catch (err) {
    return res.customJson({ message: err.message }, 500);
  }
};
