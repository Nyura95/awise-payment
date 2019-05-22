import { Request, Response } from 'express';
import { Config } from '../config';
import { InversifyContainer, TYPES } from '../container';
import { ExampleController } from './controllers/exampleController';
import * as express from 'express';

export class Routes {
  private conf: Config = InversifyContainer.get<Config>(TYPES.Conf);
  private versionApi: string;

  private exampleController: ExampleController = new ExampleController();

  constructor() {
    this.versionApi = this.conf.apiVersion;
  }

  public routes(app: express.Express) {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: `Api version ${this.versionApi}`
      });
    });

    app.route(`/api/${this.versionApi}`).get(this.exampleController.example.bind(this.exampleController));
  }
}
