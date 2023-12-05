import React, { useState } from 'react'
import image from "../../assests/c.jpg"
import DateTimeSlot from './DateTimeSlot'

const DoctorDetail = ({doctor}) => {

  const [available,setAvailable]= useState(false)
    
 
    
  return  ( 
  <div className="doctorUpper">
  <img src={image} alt="" id="doctorImage" />
    <p id='doctorName'>{doctor.name}</p>
    <p id='doctorSpecialization'>{doctor.specialization}</p>
   
    <p className="doctorDetails"id='doctorDescription'>"{doctor.description}"</p>
    
    <p className="doctorDetails"id='doctorEducationDegree'><span className='span'>Educational Qualification : </span>{doctor.educationDegree}</p>
    <p className="doctorDetails"id='doctorPatientsTreated'><span className="span">Patients Treated : </span>{doctor.patientsTreated}</p>
    <p className="doctorDetails"id='doctorAddress'> <span className="span "> Clinic Address : </span>  {doctor.address}</p>
    <div>
    <hr/>
< DateTimeSlot/>
    </div>
  
    </div>
  
  

     )
  
}

export default DoctorDetail