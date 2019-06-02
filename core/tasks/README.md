# who to use ?

```js
class testTask {
  async start() {
    console.log('go !');
  }
}

module.exports = testTask;
```

```js
const ScheduleTask = require('./');
const testTask = require('./tasks/testTask');

new ScheduleTask(new testTask(), '* * * * * *').start();
```
