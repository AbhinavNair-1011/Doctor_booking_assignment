const Doctors =require("../model/doctors");

const fetchDoctors=async (req,res,next)=>{

const doctors=await Doctors.find()
res.json(doctors);

}
const fetchService=async(req,res,next)=>{
    // const services=await Services.find()
    // res.json(services)
}

module.exports={fetchDoctors,fetchService}