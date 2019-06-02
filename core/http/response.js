const moment = require('moment');
const md5 = require('md5');

const status = [
  { statusCode: 200, reason: 1, comment: 'OK', success: true },
  { statusCode: 310, reason: -3, comment: 'Too many request', success: false },
  { statusCode: 400, reason: -1, comment: 'Bad Request', success: false },
  { statusCode: 401, reason: -4, comment: 'Unauthorized', success: false },
  { statusCode: 403, reason: -9, comment: 'Forbidden', success: false },
  { statusCode: 404, reason: -5, comment: 'Not Found', success: false },
  { statusCode: 422, reason: -6, comment: 'Unprocessable entity', success: false },
  { statusCode: 429, reason: -7, comment: 'Too Many Requests', success: false },
  { statusCode: 500, reason: -8, comment: 'Internal Server Error', success: false }
];

module.exports = (_, res, next) => {
  res.customJson = (data = {}, statusCode = 200, comment = '') => {
    let json = {};

    for (let i = 0; i < status.length; i++) {
      if (status[i].statusCode === statusCode) {
        json = {
          ...status[i]
        };
      }
    }

    json.servertime = moment.utc().unix();
    json.data = data;
    json.meta = md5(data + json.servertime);
    json.comment = comment === '' ? json.comment : comment;
    res.status(json.statusCode === 500 ? json.statusCode : 200).json(json);
  };
  next();
};
