import  multer from "multer";

const  Storage = multer.diskStorage({
    flename: function (req,file,callback){
         callback(null,file.originalname)
    }
})

const upload = multer({Storage});

export default upload;