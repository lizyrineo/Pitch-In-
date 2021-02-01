import React, { useState } from 'react'

export default function CreateOpportunity(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { opp_name, opp_description } = formData;
  const {handleCreate} = props;

  const handleChange = (e) => {
    const { opp_name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [opp_name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>
      <h3>Create Opportunity</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={opp_name}
          description='text'
          value={opp_description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
