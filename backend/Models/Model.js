const mongoose=require("mongoose")
const Schema=mongoose.Schema

const PeopleData=new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number},
    email:{type:String,required:true},
    phone:{type:String},
    password:{type:String,required:true},
    cpassword:{type:String,required:true},
    // image:{data:Buffer,contentType:String}

})
module.exports=mongoose.model("People",PeopleData)