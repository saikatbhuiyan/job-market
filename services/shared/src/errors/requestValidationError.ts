import { StatusCodes } from 'http-status-codes';
import { CustomError } from './customError';

export class RequestValidationError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  status = 'error';

  constructor(
    message: string = 'Invalid Request Validation Error',
    comingFrom: string
  ) {
    super(message, comingFrom);
  }
}
