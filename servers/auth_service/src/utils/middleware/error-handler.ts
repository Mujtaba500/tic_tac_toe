import express from 'express';
import logger from '../../shared/logger.js';
import AppError from '../../shared/error.js';

class ErrorHandler {
  public async handleErrorMiddleware(
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const fullLogger = logger.child({ userId: 2 });
    fullLogger.error(err, err.message);

    res.status(500).json({
      success: false,
      message: 'Internal Server error'
    });
    // await sendMailToAdminIfCritical();
    // await saveInOpsQueueIfCritical();
    // await determineIfOperationalError();
  }

  public handleError(err: Error) {
    logger.error({ userId: 1 }, err.message);
  }

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
}

export const errorHandler = new ErrorHandler();
