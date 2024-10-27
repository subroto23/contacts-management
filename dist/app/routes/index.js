"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contacts_routes_1 = require("../modules/contacts/contacts.routes");
//Decleration Path and route for any module
const moduleRoutes = [
    {
        path: '/contact',
        route: contacts_routes_1.contactRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
