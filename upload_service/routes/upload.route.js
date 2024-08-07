import express from "express"
import uploadFileToS3 from "../controllers/upload.controller.js";
import multer from 'multer';




const router = express.Router();

//hrad code time 
// router.post('/', uploadFileToS3);



const upload = multer();



router.post('/', upload.single('file'), uploadFileToS3);
export default router;

