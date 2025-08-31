import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import chalk from 'chalk';
import cors from 'cors';
import http from 'http';
import morgan from 'morgan';
import { errorHandler } from './utils/middleware/error-handler.js';
import logger from './shared/logger.js';
import AppError from './shared/error.js';

const port = process.env.PORT;
const prod = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(morgan(prod ? 'combined' : 'dev'));

app.get(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({
      message: 'API live'
    });
  }
);

app.get('/health', (req, res, next) => {
  // db authenticate
  try {
    throw new AppError(new Error('Error'), 'Health check failed', true);
  } catch (error: any) {
    next(error);
  }
});

/*
  All Routes
*/

app.use(errorHandler.handleErrorMiddleware);

process.on('unhandledRejection', (reason) => {
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    logger.fatal('Server shutting down');
    process.exit(1);
  }
});

/*
  Creating http server
*/

const server: http.Server = http.createServer(app);

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received.');
  server.close(() => {
    logger.info('Closed out remaining connections');
    logger.fatal('Server shutting down');
    // Additional cleanup tasks go here, e.g., close database connection
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received.');
  server.close(() => {
    logger.info('Closed out remaining connections');
    // Additional cleanup tasks go here, e.g., close database connection
    logger.fatal('Server shutting down');
    process.exit(0);
  });
});

server.listen(port, () => {
  console.log(chalk.green('✓') + ' ' + `Server listening on port ${port}`);
});
