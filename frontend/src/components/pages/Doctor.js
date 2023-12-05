import React, { useEffect } from 'react'
import DoctorDetail from './DoctorDetail'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctors } from '../../store/store'

const Doctor = () => {

  
  const dispatch=useDispatch()

  const doctors=   useSelector(state=>state.doctors.doctors)

  useEffect(()=>{

    dispatch(fetchDoctors())
  },[])


  

  return(<>
  <div>

{doctors.map(doctor=>(

 <DoctorDetail key={doctor.name} doctor={doctor}/>

))}
 </div>
 </>)
}

export default Doctor