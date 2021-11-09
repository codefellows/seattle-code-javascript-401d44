# Lab: AWS: S3 and Lambda

## Overview

AWS Lambda allows writing code that is triggered in the cloud, without thinking about maintaining servers. We'll use it today to automatically run some processing on image files after they're uploaded to an S3 Bucket

## Resources

## Feature Tasks

- Create an S3 Bucket with "open" read permissions, so that anyone can see the images/files in their browser
- A user should be able to upload an image at any size, and update a dictionary of all images that have been uploaded so far
- When an image is uploaded to your S3 bucket, it should trigger a Lambda function which must:
  - Download a file called "images.json" from the S3 Bucket if it exists
  - The images.json should be an array of objects, each representing an image. Create an empty array if this file is not present
  - Create a metadata object describing the image
    - Name, Size, Type, etc.
  - Append the data for this image to the array
    - Note: If the image is a duplicate name, update the object in the array, don't just add it
  - Upload the images.json file back to the S3 bucket

## Documentation

- In your `README.md` include:
  - a description of how to use your lambda.
  - a description of any issues you encountered during deployment of this lambda.
  - a link to your images.json file

## Stretch Goal

- Automatically deploy your function on check-ins to your main branch using a github action
- HINT: Explore the GitHub marketplace

## Submission Instructions

- Create a new repository for your lambda function, called 'image-lambda'
- Work on a non-main branch and make commits appropriately.
- Update your README.md file with the required documentation above.
- Create a pull request to your master branch with your work for this lab.
- Submit the link to that pull request on Canvas.
