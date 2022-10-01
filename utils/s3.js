const aws = require("aws-sdk");
const dotenv = require("dotenv");
const Crypto = require("crypto");
import { promisify } from "util";

dotenv.config();

const region = "US East (Ohio) us-east-2";
const bucketName = "elasticbeanstalk-us-east-2-501669761997";
const accessKeyId = process.env.AWS_S3_ACCESS_KEY;
const secretAccessKey = process.env.AWS_S3_SECRET_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});

export const generateUploadURL = async () => {
  const rawBytes = await Crypto.randomBytes(16);
  const imageName = rawBytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
};
