const mongoose=require("mongoose")

const doctorsSchema=mongoose.Schema({
    name: {
        type:String
    },
    description: {
        type:String
    },
    specialization: {
        type:String
    },

    educationDegree: {
        type:String
    },
    patientsTreated:{
     type:Number
    },
    address: {
        type:String
    },
   
});

const Doctors=mongoose.model("doctors",doctorsSchema);
module.exports=Doctors