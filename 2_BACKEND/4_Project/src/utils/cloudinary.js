import { v2 as cloudinary } from "cloudinary";   // cloudinary is used to store files, we first need to import cloudinary
import fs from "fs"  //fs comes preinstalled with node, we need not to seperately install it. It is used to perform file system operations

 cloudinary.config({   //this is a must configuration
   cloud_name: process.env.COUDINARY_CLOUD_NAME,
   api_key: process.env.COUDINARY_API_KEY,
   api_secret: process.env.COUDINARY_API_SECRET,
 });

//  For best practice, we first save the file in the local server with the help of multer and then we take that file and store it in the cloudinary and remove from local 
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null    // if the path doesn't exist

        const response = await cloudinary.uploader.upload(localFilePath,{  //this is to upload the file, it requires the url of the path and we can give many other upload option(one of them is resource_type)
            resource_type : "auto"
        })

        console.log("File uploaded successfully:",response);
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.log("not uploaded",error);
        
        fs.unlinkSync(localFilePath)  //rempove the locally saved temp file as the upload operation got failed
        return null
    }
}

export default uploadOnCloudinary