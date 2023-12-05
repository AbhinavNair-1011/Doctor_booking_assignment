const mongoose = require("mongoose");


const connectToDatabase = async (cb)=>{
    const res= await mongoose.connect("mongodb+srv://abhinav:abhinav@cluster0.e28id4i.mongodb.net/vscodehelp?retryWrites=true&w=majority");
    console.log("dbConnected");
    cb()

}

module.exports=connectToDatabase

