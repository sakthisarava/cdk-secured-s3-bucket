

import '@aws-cdk/assert/jest';
import { Stack } from '@aws-cdk/core';
import { SecureBucket } from '../src';

test('hello', () => {
  const stack = new Stack();
  new SecureBucket(stack, 'MyBucket');
  expect(stack).toHaveResource('AWS::KMS::Key');
});