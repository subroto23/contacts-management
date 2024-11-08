import express from 'express';
const router = express.Router();
import { contactRoutes } from '../modules/contacts/contacts.routes';
import { contactReactionRoutes } from '../modules/contactReaction/contactReaction.routes';

//Decleration Path and route for any module
const moduleRoutes = [
  {
    path: '/contact',
    route: contactRoutes,
  },
  {
    path: '/reaction',
    route: contactReactionRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
