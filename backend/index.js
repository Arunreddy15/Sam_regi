const express=require("express");
const mongoose=require("mongoose")
const morgan=require("morgan")
const cors=require("cors");
const bodyParser=require("body-parser")
const Router=require("./Router/PersonRouter")
const app=express();
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
// const uri="mongodb+srv://Arun:8185968230@cluster0.q2x3jpg.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    try{                       
                            //  mongodb+srv://Arun:<password>@peopledetails.cu8s14h.mongodb.net/?retryWrites=true&w=majority
        await mongoose.connect("mongodb+srv://Arun:8185968230@peopledetails.cu8s14h.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("Db connected")
    }catch(err){
        console.error(err)
    }
}connect();
PORT=3009
app.use(cors(corsOptions))
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})
app.use("/api/people",Router)