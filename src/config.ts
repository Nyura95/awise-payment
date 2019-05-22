import { ENV, loadConfig } from 'config-decorators';
import * as dotenv from 'dotenv';
import 'reflect-metadata';

export class Config {
  @ENV('ENVIRONMENT', true)
  public environment: string;
  @ENV('LOG_LEVEL', true)
  public logLevel: string;
  @ENV('LOG_VERSION', true)
  public logVersion: string;

  @ENV('LISTEN_PORT', true)
  public listenPort: number;
  @ENV('API_VERSION', true)
  public apiVersion: string;


  @ENV('MYSQL_HOST', true)
  public mysqlHost: string;
  @ENV('MYSQL_USER', true)
  public mysqlUser: string;
  @ENV('MYSQL_PASSWORD', true)
  public mysqlPassword: string;
  @ENV('MYSQL_DATABASE', true)
  public mysqlDatabase: string;
}

export const loadConfigFromEnv = (): Config => {
  dotenv.config();
  return loadConfig(Config);
};
