const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    // TODO implement

    //  triggers on upload to images/
    
    // what file was uploaded?
    const bucketName = event.Records[0].s3.bucket.name;
    const fileName = event.Records[0].s3.object.key;
    const fileSize = event.Records[0].s3.object.size;
    
    console.log(bucketName, fileName, fileSize);
    
    // what is in our current images.json in our bucket?
    const params = {
        Bucket: bucketName,
        Key: 'images.json',
    }
    
    try {
        const manifest = await s3.getObject(params).promise();
        
        //  read what is in the images.json file
        let manifestData = JSON.parse(manifest.Body.toString());
        
        //  add the name / size / type to our json file
        manifestData.push({
            name: fileName,
            size: fileSize,
            type: 'image',
        });
        let manifestBody = JSON.stringify(manifestData);
    
        //  write the file back to the bucket
        const newManifest = await s3.putObject({...params, Body: manifestBody, ContentType: 'application/json'}).promise();
        
    } catch(e) {
        console.log(e);
        
        // if its not there we can create a new one
        const newManifest = {
           Bucket: bucketName,
           Key: 'images.json',
           Body: JSON.stringify([{ name: fileName, size: fileSize, type: 'image'}]),
           ContentType: 'application/json',
        }
        
        const manifest = await s3.putObject(newManifest).promise();
        console.log('JSON file created for bucket:', manifest);
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
