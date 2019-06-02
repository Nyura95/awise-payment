const { CronJob } = require('cron');

class ScheduleTask {
  constructor(task, pattern) {
    this.task = task;
    this.pattern = pattern;
  }

  start() {
    this.job = new CronJob(
      this.pattern,
      () => {
        this._tick();
      },
      null,
      true,
      'Europe/Paris'
    );
    this._job = {};
    this._listeners = {};

    this._tick();
  }

  on(key, cb) {
    this._listeners[key] = cb;
  }

  _tick() {
    if (this._listeners['tick']) this._listeners['tick']();
    this.task.start();
  }
}

module.exports = ScheduleTask;
