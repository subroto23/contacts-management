import { Response } from 'express';

type TResponse<T> = {
  statusCodes: number;
  success: boolean;
  message?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data?.statusCodes).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
  });
};
export default sendResponse;