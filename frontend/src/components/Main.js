import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import image from '../assests/b.webp'
import Services from './pages/Services'
import { useDispatch } from 'react-redux'
import { postAppointment } from '../store/store'

const Main = () => {
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [phonenumber,setPhonenumber]=useState("")
   const [date,setDate]=useState("")

    const dispatch=useDispatch()

    
    const handleClick=(e)=>{
      e.preventDefault()
      if(name !="" && email !="" && phonenumber != "" && date !=""){
        dispatch(postAppointment({name,email,phonenumber,date }))
        alert("booking succesfull, a doctor will get in touch with you soon.")
      }else{
        alert("fill all the details")
      }
     

    }
   

  return (
    <main id="mainTag">      
      
      <div id="container">
      <img src={image}  alt="" id="mainImage" />  
      <p id="mainP">Caring for better life</p>
      <p id="mainParagraph"> We care for your every moment</p>
      <p id="mainPp"> Leading the way in medical excellence</p>
    
      <form id="bookingForm" onSubmit={handleClick}>
        <p id="bookingFormHeading">Book an appointement and one of our doctor will get in touch with you.</p>
        <div className='inputDiv'>
        <label className="formLabel"htmlFor='name'>Name</label>
      <input className="formInput" type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className='inputDiv'>
        <label className="formLabel" htmlFor='email' >Email</label>
        <input className="formInput" type="text"  id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='inputDiv'>
        <label className="formLabel" htmlFor='phonenumber'>PhoneNumber</label>
        <input className="formInput" type="number" id="phonenumber"  value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/>
        </div>
        <div className='inputDiv'>
        <label className="formLabel" htmlFor='date'>Date</label>
        <input  className="formInput"type="date" id="date"  value={date} onChange={(e)=>{setDate(e.target.value)}} />
        </div>
        <div id="formSubmitDiv">
        <button id="formSubmit">Book Appointment</button>
        </div>



      </form>

    </div>
    <Services/>
    </main>

  )
    
  
}

export default Main