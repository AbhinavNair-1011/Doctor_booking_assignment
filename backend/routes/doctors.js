const controller= require("../controller/doctorsController.js")
const Router= require("express").Router();


Router.get("/api/fetchDoctors",controller.fetchDoctors)


module.exports=Router;

