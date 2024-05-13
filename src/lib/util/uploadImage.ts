import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { IUploadImageToS3 } from "./types/upload";

// S3 Config
const s3Config = {
  bucketName: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string,
  region: process.env.NEXT_PUBLIC_AWS_REGION as string,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_ID as string,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ID as string
};

export const UploadImage = async (formData: FormData) => {
  try {
    console.log("here",s3Config);
    const file = formData.get("file") as File;
    const foldername = formData.get("name") as File;
    const s3 = new S3Client({
      region: s3Config.region,
      credentials: {
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey
      }
    });

    const command = new PutObjectCommand({
      Bucket: s3Config.bucketName,
      Key: `${foldername}/${file.name}`,
      Body: file
    });
    const imageUrl = `https://${s3Config.bucketName}.s3.${s3Config.region}.amazonaws.com/folderName/${file.name}`;
    
    const res = await s3.send(command);
    console.log(res);

    return {imageUrl, response:res};
  } catch (e) {
    return e;
  }
};
