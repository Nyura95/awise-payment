import { injectable } from 'inversify';
import 'reflect-metadata';
import { ILogger, IWorker, IExpressServer } from '../interfaces';

import { InversifyContainer, TYPES } from '../container';

@injectable()
class Worker implements IWorker {
  private log: ILogger = InversifyContainer.get<ILogger>(TYPES.Logger);

  public async Init() {
    try {
      InversifyContainer.get<IExpressServer>(TYPES.ExpressServer).StartServer();
    } catch (error) {
      this.log.error(`Error on worker ${error}`);
    }
  }
}

export { Worker };
