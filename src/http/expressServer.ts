import { injectable } from 'inversify';
import 'reflect-metadata';
import { ILogger, IWorker, IExpressServer } from '../interfaces';
import * as bodyParser from 'body-parser';

import { InversifyContainer, TYPES } from '../container';
import { Config } from '../config';
import * as express from 'express';
import * as cors from 'cors';
import { Routes } from './routes';

@injectable()
class ExpressServer implements IExpressServer {
  public express: express.Express;
  private log: ILogger = InversifyContainer.get<ILogger>(TYPES.Logger);
  private conf: Config = InversifyContainer.get<Config>(TYPES.Conf);
  private router = new Routes();

  public async StartServer() {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());

    this.router.routes(this.express);
    this.express.listen(this.conf.listenPort, err => {
      if (err) {
        throw err;
      }
      this.log.info(`Server listening on port ${this.conf.listenPort}`);
    });
  }
}

export { ExpressServer };
