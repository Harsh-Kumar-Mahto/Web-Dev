import multer from "multer";
// we are using multer as middleware as it is being used to store the files temporarily before the actual file is saved on cloudinary

// this code is used from the multer documentation
const storage = multer.diskStorage({   //here we are using multer to store in disk but we can also store in memory
    destination : function(req, file, cb) {   //cb here stands for callback
        cb(null, "./public/temp")
    },
    filename : function(req, file, cb) {

        cb(null, file.originalname)

        // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        // cb(null, file.filename + "-" + uniqueSuffix)
    }
})

export const upload = multer({storage})