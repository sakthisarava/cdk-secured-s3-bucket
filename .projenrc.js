const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'sakthi s',
  authorAddress: 'velsakthis5301@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'secure-bucket',
  repositoryUrl: 'https://github.com/velsakthis5301/secure-bucket.git',


  deps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
  ],

  java: {
    mavenGroupId: 'com.eladb',
    mavenArtifactId: 'cdk-source-bucket',
    javaPackage: 'com.eladb.securebucket',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();