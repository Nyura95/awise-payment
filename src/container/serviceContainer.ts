import { injectable } from 'inversify';
import 'reflect-metadata';
import { InversifyContainer } from './inversifyContainer';

import { ILogger, IServiceContainer, IWorker, IBrokerConnection, IMySQLHandler } from '../interfaces';

import { TYPES } from './inversifyContainer';

@injectable()
class ServiceContainer implements IServiceContainer {
  public started: boolean;
  private log: ILogger = InversifyContainer.get<ILogger>(TYPES.Logger);

  public async Start() {
    // Init mysql
    await InversifyContainer.get<IMySQLHandler>(TYPES.MySQLHandler).Init();

    // Init worker
    InversifyContainer.get<IWorker>(TYPES.Worker).Init();

    this.started = true;
    this.log.info('Service started successfully');
  }
}

export { ServiceContainer };
