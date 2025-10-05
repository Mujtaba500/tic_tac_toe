import AppError from '../../shared/error.js';
import 'dotenv/config';
import logger from '../../shared/logger.js';
import chalk from 'chalk';
import * as dbInstance from '../models'

export const authenticateDBConnection = async () => {
  try {
    await dbInstance.sequelize.authenticate();
    logger.info(
      chalk.green('✓') +
        ' ' +
        'Database connection has been established successfully.'
    );
  } catch (error) {
    throw new AppError(error, 'Unable to connect to the database:', true);
  }
};
