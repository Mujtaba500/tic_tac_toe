/*
  Distinguish between operational and non-operational Errors
*/

class AppError extends Error {
  public readonly isOperational: boolean;

  constructor(error: Error, description: string, isOperational: boolean) {
    super(description);
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export default AppError;
