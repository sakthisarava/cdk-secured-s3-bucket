import * as s3 from '@aws-cdk/aws-s3';
import { Construct } from '@aws-cdk/core';

export class SecureBucket extends s3.Bucket {
  constructor(scope: Construct, id: string, props: s3.BucketProps ={}) {
    super(scope, id, {
      ...props,
      encription: s3.BucketEncryption.KMS,
    });
  }
}