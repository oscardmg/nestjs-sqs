import { Module } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { config } from '../config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { MessageHandler } from './messageHandler';

AWS.config.update({
  region: config.AWS_REGION, // aws region
  accessKeyId: config.ACCESS_KEY_ID, // aws access key id
  secretAccessKey: config.SECRET_ACCESS_KEY, // aws secret access key
  sessionToken: config.AWS_SESSION_TOKEN,
});

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: config.TEST_QUEUE, // name of the queue
          queueUrl: config.TEST_QUEUE_URL, // the url of the queue
          region: config.AWS_REGION,
          batchSize: 10,
        },
      ],
      producers: [],
    }),
  ],
  controllers: [],
  providers: [MessageHandler],
})
export class ConsumerModule {}
