import React from 'react'
import Link from "next/link";

const ServiceCard = ({img,heading,dec,link}) => {
  return (
  <div className="services-card" >
    <div className="services-icon">
      <img src={img} alt="" />
    </div>
        <h3>{heading}</h3>
        <p className="service-dis">{dec}</p>
        <Link href={link}><button className="learn-more-btn">Learn More</button></Link>
    </div>
  )
}

export default ServiceCard