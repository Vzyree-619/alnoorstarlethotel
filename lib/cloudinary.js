import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('CLOUDINARY_CLOUD_NAME is not set');
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error('CLOUDINARY_API_KEY is not set');
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error('CLOUDINARY_API_SECRET is not set');
}

cloudinary.config({
<<<<<<< HEAD
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
=======
  cloud_name: process.env.CLOUD_NAME,
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  const result = await cloudinary.uploader.upload(fileUri, {
<<<<<<< HEAD
    folder: 'nextjs-course-mutations',
=======
    folder: 'alnoorstarlethotel',
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
  });
  return result.secure_url; 
}
