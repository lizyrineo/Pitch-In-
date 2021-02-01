import { useState } from 'react'
import Layout from '../../shared/Layouts/Layout';
import '/Spotlight.css';
import Organizations from './screens/Organizations/Organizations';
import CarouselComponent2 from './screens/Carousel/CarouselComponent2'


export default function Spotlight(props) {
  const [organization, setOrganization] = useState('')
  return (
    <div>
      <Layout organization={props.organizations}>
        <div className='team'>
        <h1>Team Building Events</h1>
        <h2 className="org_name">{organizations.org_name}</h2>
        <h4 className="org_link">{organizations.org_link}</h4>
        <h4 className="org_description">{organizations.org_description}</h4>
        <Carousel source={CarouselComponent2} imageChange={true} intervalTime={3500} />
        </div>
      </Layout>
    </div>
  )
}