import { Sequelize } from 'sequelize-typescript';
import AppError from '../../shared/error.js';
import 'dotenv/config';
import { ANY } from '../../shared/types/index.js';
import logger from '../../shared/logger.js';
import chalk from 'chalk';

export const dbInstance: Sequelize = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USERNAME!,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
  }
);

export const authenticateDBConnection = async () => {
  try {
    await dbInstance.authenticate();
    logger.info(
      chalk.green('✓') +
        ' ' +
        'Database connection has been established successfully.'
    );
  } catch (error: ANY) {
    throw new AppError(error, 'Unable to connect to the database:', true);
  }
};
