import React, { useState } from 'react'

const DateTimeSlot = () => {
  const [date,setDate]=useState(new Date())
  const [render,setRender]=useState(0)
  const slots=["10:00 am","12:00 pm","02:00 pm","04:00 pm","06:00 pm","08:00 pm"]

  const handleClick=(check)=>{
    const newDate= date
  check=="front" ?newDate.setDate(newDate.getDate()+1) : newDate.setDate(newDate.getDate()-1)    
setDate(newDate)
console.log(date)
setRender(render=>render=render +1)


  }
  return (<>
  
  <div id="dateSlotContainer">
    <p>Doctor available at </p>
  <div id="dateDiv">
    <button id="back" onClick={()=>handleClick("back")}>{"<"}</button>
    <p id="date">{date.toLocaleDateString()}</p>
  <button id="front" onClick={()=>handleClick("front")}>{">"}</button>

  </div>
  <div id="slotDiv">
  {slots.map(slot=>(
    
    <p id="slot">{slot}</p>
  ))}
  </div>
  </div>
  </>

  )
}

export default DateTimeSlot