import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  TEST_QUEUE: process.env.TEST_QUEUE,
  TEST_QUEUE_URL: process.env.TEST_QUEUE_URL,
  AWS_REGION: process.env.AWS_REGION,
  ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN,
};
