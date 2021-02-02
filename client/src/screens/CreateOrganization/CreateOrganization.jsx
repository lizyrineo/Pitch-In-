import React, { useState } from 'react'
import {createOrganization} from '../../services/organizations'

const CreateOrganization = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    phone: ''
  })
  const { org_name, org_link, org_phone } = formData;
  const {handleCreate} = props;

  // const handleChange = (e) => {
  //   const { opp_name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [org_name]: value
  //   }))
  // }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [org_name]: value
    }))
  }

  return (
    
      <form className="create-form">
      <h3>Create Organization</h3>
      <label>Name:
        <input
          className='input-name'
          placeholder='Name'
          value={org_name}
          name='org_name'
          onChange={handleChange}
        />
        <input
          className='link-input'
          placeholder='Link'
          value={org_link}
          name='org_link'
          onChange={handleChange}
        />
        <input
          className='phone-input'
          placeholder='Phone Number'
          value={org_phone}
          name='org_phone'
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
export default CreateOrganization;