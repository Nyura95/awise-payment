const ScheduleTask = require('../tasks');
const cli = require('./cli');

class autoCli {
    start() {
        cli(config);
    }
}

new ScheduleTask(new autoCli(), '* */15 * * * *').start();