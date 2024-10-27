import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

//Middleware decleration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Decleration Modules Routes
app.use('/api/v1', router);

export default app;
