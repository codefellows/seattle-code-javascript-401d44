# AWS: S3 and Lambda

AWS Lambda allows writing code that is triggered in the cloud, without thinking about maintaining servers.

## Learning Objectives

### Students will be able to

#### Describe and Define

- S3
- Buckets and Objects
- Serverless Functions
- Pros and Cons of a Serverless Architecture

#### Execute

- Creating S3 Buckets for file storage
- Deploying a NodeJS Lambda Function that connects to S3
- Auto Deploying to AWS through GitHub

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Serverless Functions In a nutshell

- Serverless = Micro Applications, Micro Architecture
- Event Triggered Code
- Targeted Code (Best language for the job)
- Strike teams (SME's don't have to integrate)
- Micro Scaling (Functions scale independently and as needed)

### Pro Tips ...

#### Args / Params

- Lambdas are called with 2 parameters
  - Event Data (will likely be complex)
  - AWS Context

#### Testing

- Invoked in the Lambda Console
- Simulated environments
- Simulated Input/Event args
