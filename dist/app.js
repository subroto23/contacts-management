"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandeler_1 = __importDefault(require("./middleware/globalErrorHandeler"));
const app = (0, express_1.default)();
//Middleware decleration
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
//Decleration Modules Routes
app.use('/api/v1', routes_1.default);
//Global Error Handler
app.use(globalErrorHandeler_1.default);
exports.default = app;
