"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastErrors = (err) => {
    const statusCode = 400;
    //Path And Message
    const errorSource = [
        {
            path: err === null || err === void 0 ? void 0 : err.path,
            message: err === null || err === void 0 ? void 0 : err.message,
        },
    ];
    //Function Return Values
    return {
        statusCode,
        message: 'Invalid ID',
        errorSource,
    };
};
exports.default = handleCastErrors;
