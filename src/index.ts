import { initContainer, InversifyContainer, TYPES } from './container';

import * as winston from 'winston';
import { loadConfigFromEnv } from './config';
import { ILogger, IServiceContainer } from './interfaces';

const start = async () => {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
  });
  try {
    const config = loadConfigFromEnv();
    initContainer(config);

    const log = InversifyContainer.get<ILogger>(TYPES.Logger);
    log.InitLogger('ApiSheet');
    log.info('Initializing service ApiSheet');

    await InversifyContainer.get<IServiceContainer>(TYPES.ServiceContainer).Start();
  } catch (error) {
    console.log(error);
    logger.error({ message: error.message, stack: JSON.stringify(error) });
    process.exit(1);
  }
};

(() => start())();
