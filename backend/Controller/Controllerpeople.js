const People=require("../Models/Model");
const multer=require("multer")
const fs=require("fs")
const index=(req,res,err)=>{
    People.find()
    .then(response=>{
        res.json({
            response
        })
    }).catch(error=>{
        res.json({
        messgae:"An Error Occured!"
            })
    })
}

const show=(req,res,err)=>{
    const employeeId=req.body.employeeId
    People.findById(req.body.employeeId)
    .then(response=>{
        res.json({
            response
        })
    }).catch(error=>{
        res.json({
        messgae:"An Error Occured!"
            })
    })
}


const store=(req,res)=>{
    console.log(req.body)
    const people=new People({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword,
        // image:{
        //     data:fs.readFileSync("uploads/"+req.file.filename),
        //     contentType:"image/png"
        // }
    })
    if (req.body.password===req.body.cpassword){
    people.save()
    .then(response=>{
        res.json({
            message:"Person Added successfully"
        })
    }).catch(error=>{
        res.json({
            message:"Error Occured!"
        })
    })}else{
        res.json({
            message:"Password Not Matched"
        })
    }
}

const update=(req,res)=>{
    const employeeId=req.body.employeeId

    const data={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age,
        phone:req.body.phone,
        email:req.body.email
    }
    People.findByIdAndUpdate(employeeId,{$set:data})
    .then(response=>{
        res.json({
            messgae:"Person Updated Successfully"
        })
    }).catch(error=>{
        res.json({
                messgae:"An Error Occured!"
            })
    })
}

const remove=(req,res,err)=>{
    let employeeID=req.body.employeeId

    People.findByIdAndRemove(employeeID)
    .then(response=>{
        res.json({
            messgae:"Person Removed Successfully"
        })
    }).catch(error=>{
        res.json({
                messgae:"An Error Occured!"
            })
    })
}


module.exports={index,show,store,update,remove}