import { injectable } from 'inversify';
import 'reflect-metadata';
import * as mysql from 'mysql2';
import { ILogger, IMySQLHandler } from '../interfaces';
import { Config } from '../config';
import { InversifyContainer, TYPES } from '../container/index';
import { ExampleModel } from '../models/ExampleModel';

@injectable()
export class MySQLHandler implements IMySQLHandler {
  private log: ILogger = InversifyContainer.get<ILogger>(TYPES.Logger);
  private conf: Config = InversifyContainer.get<Config>(TYPES.Conf);

  private connection: any;

  public async Init() {
    this.connection = await mysql.createPool({
      host: this.conf.mysqlHost,
      user: this.conf.mysqlUser,
      password: this.conf.mysqlPassword,
      database: this.conf.mysqlDatabase,
      connectionLimit: 10
    });
    this.log.info(`Successfully logged to MySQL database on ${this.conf.mysqlHost}`);
  }

  public Example(): Promise<ExampleModel[] | null> {
    return new Promise<ExampleModel[] | null>(async (resolve, reject) => {
      try {
        const promisePool = this.connection.promise();
        const [rows] = await promisePool.execute(`select * from example`);
        if (rows.length > 0) {
          const examples: ExampleModel[] = [];
          for (const row of rows) {
            examples.push(new ExampleModel(row));
          }
          resolve(examples);
        } else {
          resolve(null);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}
