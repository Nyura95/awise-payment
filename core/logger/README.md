# who to use ?

```js
const Logger = require('./')({
  levelLog: 0
  table: 
    center: true,
    borderChar: '|'
    lineChar: '-'
    crossingChar: '+'
    minSpace: 35
  format: 'DD/MM/YYYY - HH:mm:ss'
  loggers: [
    { 'name': 'info', 'color': 'blue', 'save': false, 'level': 1 },
    { 'name': 'error', 'color': 'red', 'save': false , 'level': 3 },
    { 'name': 'debug', 'color': 'green', 'save': false, 'level': 0 }
  ]
});
Logger.info('test');
Logger.info('test', 'test');
```