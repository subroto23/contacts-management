"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMongooseValidationError = (err) => {
    const statusCode = 404;
    //Path And Message Find in ZOdError
    const errorSource = Object.values(err === null || err === void 0 ? void 0 : err.errors).map((val) => {
        return {
            path: val === null || val === void 0 ? void 0 : val.path,
            message: val === null || val === void 0 ? void 0 : val.message,
        };
    });
    //Function Return Values
    return {
        statusCode,
        message: 'Validation Error',
        errorSource,
    };
};
exports.default = handleMongooseValidationError;
