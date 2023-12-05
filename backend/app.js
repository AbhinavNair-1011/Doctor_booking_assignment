const express=require("express");
const app=express();
const cors=require("cors")

const connectToDatabase=require("./database/connect")



const doctors=require("./routes/doctors")
const appointments=require("./routes/appointment")

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("api running on port 3000")
})

app.use(doctors);
app.use(appointments)

connectToDatabase(()=>{
    app.listen(3001,()=>{
        console.log("server running ")
    })
})
