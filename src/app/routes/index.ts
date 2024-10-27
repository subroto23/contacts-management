import express from 'express';
const router = express.Router();
import { contactRoutes } from '../modules/contacts/contacts.routes';

//Decleration Path and route for any module
const moduleRoutes = [
  {
    path: '/contact',
    route: contactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
