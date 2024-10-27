"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err) => {
    var _a;
    const statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    const match = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.match(/"([^"]*)"/);
    const extractValueFromMessage = match && match[1];
    //Path And Message Find in ZOdError
    const errorSource = [
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
exports.default = handleDuplicateError;
