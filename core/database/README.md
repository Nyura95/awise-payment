# who to use ?

```js
const { storeDatabaseConnection, DatabaseConnection, getDatabaseModels } = require('./');

storeDatabaseConnection('example', new DatabaseConnection('host', 'user', 'pass', 'database', 'mysql', './.auto/models/database.zip', { min: 1 }));

let database = getDatabaseModels('example');

let find = await database.findOne({
  where: {
    id: 1
  }
});

console.log(find);
```