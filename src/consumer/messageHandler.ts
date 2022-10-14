import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { config } from '../config';

console.log('config.AWS_REGION', config);
@Injectable()
export class MessageHandler {
  @SqsMessageHandler(config.TEST_QUEUE, true)
  async handleMessage(messages: AWS.SQS.Message[]) {
    for (const message of messages) {
      const obj: any = JSON.parse(message.Body) as {
        message: string;
        date: string;
      };
      console.log('message:', obj.Message);
      console.log('messageId:', obj.MessageId);
    }
    // use the data and consume it the way you want //
  }
}
