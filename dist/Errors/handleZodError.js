"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
//Zod Error Handler
const handleZodError = (err) => {
    var _a;
    const statusCode = 400;
    //Path And Message Find in ZOdError
    const errorSource = (_a = err === null || err === void 0 ? void 0 : err.issues) === null || _a === void 0 ? void 0 : _a.map((issue) => {
        return {
            //Zod Last Index is path so length -1 means last index of issue
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        };
    });
    //Function Return Values
    return {
        statusCode,
        message: 'Validation Error',
        errorSource,
    };
};
exports.handleZodError = handleZodError;
