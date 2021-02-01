import React, { useState } from 'react'

export default function CreateOrganization(props) {
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    phone: ''
  })
  const { org_name, org_link, org_phone } = formData;
  const {handleCreate} = props;

  const handleChange = (e) => {
    const { org_name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [org_name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>
      <h3>Create Organization</h3>
      <label>Name:
        <input
          type='text'
          org_name='name'
          value={org_name}
          org_link='text'
          value={org_link}
          org_phone='integer'
          value={org_phone}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
