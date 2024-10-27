import { StatusCodes } from 'http-status-codes';
import { TErrorSource, TGenericError } from '../interface/Errors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericError => {
  const statusCode = StatusCodes.BAD_REQUEST;

  const match = err?.message?.match(/"([^"]*)"/);
  const extractValueFromMessage = match && match[1];
  //Path And Message Find in ZOdError
  const errorSource: TErrorSource = [
    {
      path: '',
      message: `${extractValueFromMessage} is already exists`,
    },
  ];
  //Function Return Values
  return {
    statusCode,
    message: 'Duplicate Value Assigned',
    errorSource,
  };
};
export default handleDuplicateError;
