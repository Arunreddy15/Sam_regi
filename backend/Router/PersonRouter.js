const express=require("express");
const router=express.Router();
const multer=require("multer")
// const uploads=multer({dest:"uploads/"})

// const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"./uploads")
//     },
//     filename:function(req,file,cb){
//         cb(null,new Date().toISOString()+file.fieldname)
//     }
// })
const Storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const uploads=multer({storage:Storage})

const People=require("../Controller/Controllerpeople")
router.get("/",People.index)
router.post("/show",People.show)
router.post("/store",People.store)//uploads.single("img"),
router.post("/update",People.update)
router.post("/remove",People.remove)


module.exports=router