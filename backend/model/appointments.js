const mongoose=require("mongoose")

const appointmentsSchema=mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    phonenumber: {
        type:Number
    },

    date: {
        type:Date
    },
    
   
});

const Appointments=mongoose.model("appointment",appointmentsSchema);
module.exports=Appointments