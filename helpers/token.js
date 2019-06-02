const jwt = require('jsonwebtoken');
const secretKey = 'appointrip015';

/**
 * @description return a new token with data include
 * @param {*} data
 * @returns string
 */
exports.generateNewToken = data => jwt.sign(data, secretKey, { expiresIn: 60 * 60 });

/**
 * @description verif the token
 * @param {string} token
 * @returns boolean
 */
exports.verifyToken = token => {
  try {
    jwt.verify(token, secretKey);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * @description decode a token
 * @param {string} token
 * @returns any
 */
exports.decodeToken = token => {
  try {
    jwt.verify(token, secretKey);
    return jwt.decode(token);
  } catch (err) {
    return {};
  }
};
