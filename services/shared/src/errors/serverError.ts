import { StatusCodes } from 'http-status-codes';
import { CustomError } from './customError';

export class ServerError extends CustomError {
  statusCode = StatusCodes.SERVICE_UNAVAILABLE;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}
