const Appointments=require("../model/appointments")



const postAppointment= async (req,res,next)=>{
await Appointments.create({
    name:req.body.name,
    email:req.body.email,
    phonenumber:Number(req.body.phonenumber),
    date:new Date(req.body.date)
})
res.json("succesfull")
}

module.exports={postAppointment}