import { useState } from 'react'
import Layout from '../../shared/Layouts/Layout';
import '/Spotlight.css';
import Organization from './Organization/Organization';
import CarouselComponent2 from './CarouselComponent2'


export default function Spotlight(props) {
  const [getOrganization, setOrganization] = useState('')
  return (
    <div>
      <Layout organization={props.organization}>
        <h1>Team Building Events</h1>
        <h2 className="org_name">{organization.org_name}</h2>
        <h4 className="org_link">{organization.org_link}</h4>
        <h4 className="org_description">{organization.org_description}</h4>
        <Carousel source={CarouselComponent2} imageChange={true} intervalTime={3500} />
      </Layout>
    </div>
  )
}