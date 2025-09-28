import { statusCodes } from '../constants.js';
import { ANY } from '../types/types.js';

const sendServerResponse = (
  success: Boolean,
  statusCode: number,
  res: ANY,
  message?: string,
  data?: ANY
) => {
  return res.status(statusCode).json({
    success,
    message,
    data
  });
};

export { sendServerResponse };
