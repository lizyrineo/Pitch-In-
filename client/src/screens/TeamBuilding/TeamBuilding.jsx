import { useState } from 'react'

import './TeamBuilding.css';
import Organizations from '../Organizations/Organizations';
import CarouselComponentHfa from '../Carousel/CarouselComponentHfa'


export default function TeamBuilding(props) {
  const organization = {
    "org_name": "Habitat for Humanity",
    "org_link": "https://www.habitatmetrodenver.org/",
    "org_phone": 303,
    "org_image": "https://www.habitatmetrodenver.org/static/image/logo-white.png?185013110417",
    "org_description": "Habitat\'s volunteer program provides the ultimate team-building experience for companies of all kinds! Our 41 years of experience has helped us create a Team-Building Program where companies can engage their employees in a unique and fulfilling way to give back to their community. Companies of all sizes can engage their employees and encourage stronger relationships while learning new skills."
  }
  return (
    <div>
      
        <div className='team'>
        <h1>Team Building Events</h1>
        <h2 className="org_name">{organization.org_name}</h2>
        <h4 className="org_link">{organization.org_link}</h4>
        <h4 className="org_description">{organization.org_description}</h4>
        <CarouselComponentHfa />
        </div>
     
    </div>
  )
}