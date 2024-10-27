/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.dataBaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Server is Running http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
