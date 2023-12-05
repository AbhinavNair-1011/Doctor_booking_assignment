import { configureStore,createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchDoctors= createAsyncThunk("fetchDoctors",async()=>{
  const doctors= await axios.get("http://localhost:3001/api/fetchDoctors");
  console.log(doctors)
  return doctors.data
})

export const postAppointment=createAsyncThunk("postAppointment",async(data)=>{
  const appointment=await axios.post("http://localhost:3001/api/postAppointment",data);
})
  const services=  [
    {
      "url":"https://icon-library.com/images/checkup-icon/checkup-icon-18.jpg",
      "name": "General Checkup",
      "description": "A comprehensive and routine examination aimed at assessing the overall health of the patient. This includes checking vital signs, discussing medical history, and addressing any immediate health concerns or questions the patient may have."
    },
  
    {
      "url":"https://cdn-icons-png.flaticon.com/512/1453/1453592.png",
      "name": "Diagnostic Tests",
      "description": "Ordering and interpreting diagnostic tests such as blood tests, X-rays, MRIs, and other medical imaging studies. Diagnostic tests aid in the accurate diagnosis of medical conditions, allowing for effective treatment planning and management."
    },
    {
      "url":"https://cdn-icons-png.flaticon.com/512/3974/3974877.png",
      "name": "Prescription Services",
      "description": "Providing medication prescriptions based on diagnosis. This includes discussing treatment options, potential side effects, and ensuring that patients understand how to take prescribed medications. Regular follow-ups may be scheduled to monitor the medication's effectiveness."
    },
    {
      "url": "https://www.freeiconspng.com/uploads/referral-icon-png-12.png",
      "name": "Specialist Referrals",
      "description": "Referring patients to specialists for further consultation and treatment. When a medical issue requires specialized care, the doctor coordinates with relevant specialists to ensure patients receive the best possible healthcare. Follow-ups may occur to monitor progress."
    },
    {
      "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgcPfEfULyhaQgZooZmuYWcaB64OhHLUA2g&usqp=CAU",
      "name": "Chronic Disease Management",
      "description": "Managing and monitoring patients with chronic conditions such as diabetes, hypertension, and asthma. This involves developing personalized treatment plans, providing education on self-management, and conducting regular checkups to prevent complications and improve quality of life."
    },
    {
      "url": "https://cdn1.vectorstock.com/i/1000x1000/11/05/surgery-black-glyph-icon-vector-33391105.jpg",
      "name": "Minor Surgeries",
      "description": "Performing minor surgical procedures in the clinic. This may include suturing wounds, removing small growths or cysts, and other minor interventions. The goal is to address specific medical issues in a controlled and outpatient setting."
    },
    {
      "url":"https://cdn-icons-png.flaticon.com/512/7600/7600096.png",
      "name": "Counseling",
      "description": "Providing emotional and mental health support and counseling. In addition to physical health, doctors address patients' mental and emotional well-being. Counseling sessions may cover stress management, coping strategies, and lifestyle adjustments to promote mental wellness."
    },
 
    {
      "url":"https://as2.ftcdn.net/v2/jpg/01/21/81/95/1000_F_121819594_pVXLXKjev4r6yGDPW4pEyX107BoGlsbR.jpg",
      "name": "Emergency Care",
      "description": "Providing immediate medical attention for emergencies. Doctors are trained to handle urgent medical situations, stabilize patients, and coordinate with emergency services when necessary. Emergency care addresses critical conditions such as heart attacks, severe injuries, and acute illnesses."
    }
  ]



const doctorsSlice=createSlice({
    name:"doctors",
    initialState:{
        doctors:[],
        services:services
    }    ,
    reducers:{

        },
        extraReducers:(builder)=>{

          builder.addCase(fetchDoctors.fulfilled,(state,action)=>{
            state.doctors=[]
            action.payload.map(doctor=>{
              state.doctors.push(doctor)
            })

          })

        }
        
    
})

const store=configureStore({
    reducer:{
        doctors:doctorsSlice.reducer
    }
})
export default store