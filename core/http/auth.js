const { Router } = require('express');

let _func = () => {};
let _gestUrnToken = { include: {}, exclude: {} };

module.exports = (gestUrnToken = null, func = null) => {
  let router = Router();

  if (gestUrnToken) {
    _gestUrnToken = gestUrnToken;
  }

  if (func) {
    _func = func;
  }

  router.use(auth);

  return router;
};

const auth = (req, res, next) => {
  if (!_gestUrnToken.include) {
    _gestUrnToken.include = {};
  }
  if (!_gestUrnToken.exclude) {
    _gestUrnToken.exclude = {};
  }

  // we stock in the object, one modify and one not modify
  let urn = {
    includeTurn: starConvertUrl(Object.keys(_gestUrnToken.include), req.path),
    includeSimple: Object.keys(_gestUrnToken.include),
    excludeTurn: starConvertUrl(Object.keys(_gestUrnToken.exclude), req.path),
    excludeSimple: Object.keys(_gestUrnToken.exclude)
  };

  // check if this req is exclude the gestToken by the settings
  for (let i = 0; i < urn.excludeTurn.length; i++) {
    // if url matching or if urn declare is all
    if (urn.excludeTurn[i] === req.path || urn.excludeTurn[i] === 'all') {
      // if the method is declare, we skip the check token
      if (_gestUrnToken.exclude[urn.excludeSimple[i]].indexOf(req.method) > -1) {
        return next();
      }
    }
  }

  // check if tthis req is include the gestToken by the settings
  for (let i = 0; i < urn.includeTurn.length; i++) {
    // if url matching or if urn declare is all*
    if (urn.includeTurn[i] === req.path || urn.includeTurn[i] === 'all') {
      // if the method is declare, we skip the check token
      if (_gestUrnToken.include[urn.includeSimple[i]].indexOf(req.method) > -1) {
        return _func(req, res, next);
      }
    }
  }

  next();
};

/***
 * @desc function allow replace the stars in the uriPublic config
 * @param {array} urlPublics
 *	@param {string} url
 *	@example matchStar(['/', '/produits/*'], '/produits/1')
 * @return {array} ['/', '/produits/1']
 ***/
const starConvertUrl = (urlPublics, url) => {
  for (let i = 0; i < urlPublics.length; i++) {
    let urlPublic = urlPublics[i].split('/');
    let urls = url.split('/');
    for (let y = 0; y < urlPublic.length; y++) {
      if (urlPublic[y] === '*') {
        urlPublic[y] = urls[y];
      }
      if (urlPublic[y] === '**' && urlPublic.length - 1 === y) {
        for (let t = y; t < urls.length; t++) {
          urlPublic[t] = urls[t];
        }
      }
    }
    urlPublics[i] = urlPublic.join('/');
  }
  return urlPublics;
};
