import { StatusCodes } from 'http-status-codes';
import { CustomError } from './customError';

export class DatabaseConnectionError extends CustomError {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  status = 'error';

  constructor(
    message: string = 'Error connecting to database',
    comingFrom: string
  ) {
    super(message, comingFrom);
  }
}
