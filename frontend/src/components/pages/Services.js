import React from 'react'
import image from "../../assests/b.jpg"
import { useSelector } from 'react-redux'

const Services = () => {
 const services = useSelector(state=>state.doctors.services)
 

  return (<>

  <div id="serviceHeadingContainer">
    <img src={image} alt="" id="serviceHeadingImage"/>
    <div id="serviceHeadingWrap">
<h2 id="serviceHeading">Wide range of medical services</h2>
<p id="serviceHeadingDescription">Our website takes pride in offering a diverse array of medical services designed to cater to the multifaceted needs of our valued
   patients. From routine checkups that form the foundation of preventive care to specialized treatments addressing unique health 
   concerns, our comprehensive range ensures holistic well-being. Our vaccination services contribute significantly to public health,
    safeguarding individuals against various infectious diseases.</p>
    </div>


  </div>

<div id="servicesContainer">

  
  {services.map(service=>(
      <div className="serviceContainer">
      <img src={service.url} alt="ok"  id="serviceImage"/>
      <p className="serviceName">{service.name}</p>
      <p id="serviceDescription">{service.description}</p>
    
    </div>
  ) )}



</div>
  
</>
  )
}

export default Services