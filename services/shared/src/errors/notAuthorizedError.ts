import { StatusCodes } from 'http-status-codes';
import { CustomError } from './customError';

export class NotAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}
