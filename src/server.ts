/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import { Server } from 'http';

let server: Server;
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.dataBaseUrl as string);
    server = app.listen(config.port, () => {
      console.log(`Server is Running http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

process.on('unhandledRejection', () => {
  console.log('Unhandled Rejection is detected , shutting down ...');
  //For Asynchronous operations
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('Unhandled Exception is detected , shutting down ...');
  //For Synchronous operations
  process.exit(1);
});
