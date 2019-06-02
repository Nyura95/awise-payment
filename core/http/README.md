# who to use ?

```js
const startHttp = require('./');

let middleware = function(req, res, next) {
  if (!req.headers.authentification) {
    return res.customJson('nok', 401);
  }
  next();
};

// port, folder api, logger, auth
startApi(__dirname + '/api', {
  port: 8080,
  gestUrnToken: { exclude: [], include: [] },
  logger,
  authorization: middleware,
  folderIndex: __dirname + '/view'
});
```
