# who to use ?

```js
const redis = require('./');

let con = redis({
  host: 'localhost',
  post: 6379,
  password: '',
  key: 'token_'
}, 6);

con.setAsync('test', { test: 'ok' }).then(res => {
  console.log(res)
  con.getAsync('test').then(res => {
    console.log(res)
  });
});
```