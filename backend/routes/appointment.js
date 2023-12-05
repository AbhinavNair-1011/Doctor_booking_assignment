const controller= require("../controller/appointmentsController")
const Router= require("express").Router();


Router.post("/api/postAppointment",controller.postAppointment )


module.exports=Router;

