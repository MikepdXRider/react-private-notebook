import dotenv from 'dotenv';
dotenv.config();

global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
