import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

interface S3UploadInterface {
  file: Express.Multer.File;
  bucket: string;
  originalName: string;
  mimetype: string;
}

@Injectable()
export class FileService {
  private AWS_S3_BUCKET = process.env.AWS_S3_BUCKET as string;
  private s3 = new AWS.S3({
    credentials: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY as string,
      secretAccessKey: process.env.AWS_S3_KEY_SECRET as string,
    },
    endpoint: new AWS.Endpoint(process.env.AWS_S3_ENDPOINT as string),
  });

  constructor() {}

  async uploadFile(file: Express.Multer.File): Promise<string | any> {
    try {
      return this.s3_upload({
        file: file,
        bucket: this.AWS_S3_BUCKET,
        originalName: file.originalname,
        mimetype: file.mimetype,
      });
    } catch (e) {
      console.log(e);
    }
  }

  private async s3_upload({
    file,
    bucket,
    originalName,
    mimetype,
  }: S3UploadInterface): Promise<string> {
    const s3Reponse = await this.s3
      .upload({
        Bucket: bucket,
        Key: originalName,
        Body: file.buffer,
        ContentType: mimetype,
      })
      .promise();

    return s3Reponse.Location;
  }
}
