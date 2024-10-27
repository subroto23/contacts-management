"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = require("http-status-codes");
const zod_1 = require("zod");
const handleZodError_1 = require("../Errors/handleZodError");
const handleMongooseError_1 = __importDefault(require("../Errors/handleMongooseError"));
const HandleCastErrors_1 = __importDefault(require("../Errors/HandleCastErrors"));
const handleDuplicateError_1 = __importDefault(require("../Errors/handleDuplicateError"));
const AppErrors_1 = __importDefault(require("../Errors/AppErrors"));
const config_1 = __importDefault(require("../app/config"));
const globalErrorHandler = (err, req, res, next) => {
    //Default Values
    let statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    let message = 'Something went wrong';
    //Defaul Error Sources
    let errorSourses = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];
    //ZOd Error Checking
    if (err instanceof zod_1.ZodError) {
        //Zod Error Validation Error
        const simplifiedError = (0, handleZodError_1.handleZodError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourses = simplifiedError.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        //Mongoose Error
        const simplifiedError = (0, handleMongooseError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourses = simplifiedError.errorSource;
    }
    else if (err.name === 'CastError') {
        //Cast error want to string not assign string as like as
        const simplifiedError = (0, HandleCastErrors_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourses = simplifiedError.errorSource;
    }
    else if (err.code === 11000) {
        //Duplicated Value Error for Unique Key
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSourses = simplifiedError.errorSource;
    }
    else if (err instanceof AppErrors_1.default) {
        //Throw new Error
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSourses = [
            {
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    else if (err instanceof Error) {
        //Throw new Error
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSourses = [
            {
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    // Function
    return res.status(statusCode).json({
        success: false,
        message: message || err.message,
        erroSourses: errorSourses,
        stack: config_1.default.node_env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorHandler;
