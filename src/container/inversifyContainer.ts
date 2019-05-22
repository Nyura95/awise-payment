import { Container } from 'inversify';
import {
  ILogger,
  IServiceContainer,
  IWorker,
  IExpressServer,
  IMySQLHandler
} from '../interfaces';
import { Logger } from '../logger/logger';
import { Worker } from '../worker/worker';
import { Config } from './../config';
import { ServiceContainer } from './serviceContainer';
import { ExpressServer } from '../http/expressServer';
import { MySQLHandler } from '../database/MySQLHandler';

export const TYPES = {
  Conf: Symbol.for('Conf'),
  Logger: Symbol.for('Logger'),
  ServiceContainer: Symbol.for('ServiceContainer'),
  Worker: Symbol.for('Worker'),
  ExpressServer: Symbol.for('ExpressServer'),
  MySQLHandler: Symbol.for('MySQLHandler'),
};

export const InversifyContainer = new Container();

export const initContainer = (conf: Config) => {
  InversifyContainer.bind<Config>(TYPES.Conf).toConstantValue(conf);
  InversifyContainer.bind<ILogger>(TYPES.Logger)
    .to(Logger)
    .inSingletonScope();
  InversifyContainer.bind<IWorker>(TYPES.Worker)
    .to(Worker)
    .inSingletonScope();
  InversifyContainer.bind<IMySQLHandler>(TYPES.MySQLHandler)
    .to(MySQLHandler)
    .inSingletonScope();
  InversifyContainer.bind<IExpressServer>(TYPES.ExpressServer)
    .to(ExpressServer)
    .inSingletonScope();
  InversifyContainer.bind<IServiceContainer>(TYPES.ServiceContainer)
    .to(ServiceContainer)
    .inSingletonScope();
};
