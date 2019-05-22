import { inject, injectable } from 'inversify';
import { Config } from '../config';
import { InversifyContainer, TYPES } from '../container/inversifyContainer';
import { ILogger } from '../interfaces';

import 'reflect-metadata';

import * as Raven from 'raven';
import * as winston from 'winston';

@injectable()
export class Logger implements ILogger {
  public name: string;
  public level: string;
  public version: string;

  public info: any;
  public error: any;
  public warn: any;
  public debug: any;
  private logger: any;
  private conf: Config = InversifyContainer.get<Config>(TYPES.Conf);

  public InitLogger(name: string) {
    this.name = name;
    this.level = this.conf.logLevel;
    this.version = this.conf.logVersion;

    const logFormatter: any = winston.format.printf(options => {
      const output = {
        level: options.level.toUpperCase(),
        message: options.message,
        timestamp: new Date().toISOString(),
        service: name,
        version: this.version
      };

      return JSON.stringify(output);
    });

    this.logger = winston.createLogger({
      level: this.level,
      format: winston.format.combine(winston.format.label({ label: name }), winston.format.timestamp(), logFormatter),
      transports: [new winston.transports.Console()]
    });

    this.info = this.logger.info.bind(this.logger);
    this.error = this.logger.error.bind(this.logger);
    this.warn = this.logger.warn.bind(this.logger);
    this.debug = this.logger.debug.bind(this.logger);


  }
}
