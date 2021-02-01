import { useState } from 'react'
import Layout from '../../shared/Layouts/Layout';
import '/Spotlight.css';
import Organizations from './screens/Organizations/Organizations';
import CarouselComponent from './Carousel/CarouselComponent'


export default function Spotlight(props) {
  const [organizations, setOrganizations] = useState('')
  return (
    <div>
      <Layout organizations={props.organizations}>
        <div className='spotlight'>
        <h1>This month's spotlight</h1>
        <h2 className="org_name">{organizations.org_name}</h2>
        <h4 className="org_link">{organizations.org_link}</h4>
        <h4 className="org_description">{organizations.org_description}</h4>
          <Carousel source={CarouselComponent} imageChange={true} intervalTime={3500} />
        </div>
      </Layout>
    </div>
  )
}
