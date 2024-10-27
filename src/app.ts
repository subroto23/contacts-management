import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './middleware/globalErrorHandeler';
const app: Application = express();

//Middleware decleration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Decleration Modules Routes
app.use('/api/v1', router);

//Global Error Handler
app.use(globalErrorHandler);

export default app;
