import { ApiMessage } from '../../object/ApiMessage';
import { Request, Response } from 'express';
import { InversifyContainer, TYPES } from '../../container/inversifyContainer';
import { ILogger } from '../../interfaces';

export class ExampleController {
  private log: ILogger = InversifyContainer.get<ILogger>(TYPES.Logger);

  public async example(_: Request, res: Response) {
    this.log.info('example');
    return res.send(new ApiMessage(true, 1, 'Success', 'ok', '', new Date()));
  }
}
