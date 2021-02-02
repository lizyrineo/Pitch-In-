import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CreateOpportunity(props) {
  const [formData, setFormData] = useState({
    opp_name: '',
    opp_description: ''
  })
  const { opp_name, opp_description } = formData;
  const {handleCreate} = props;
  const { id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(id, formData)
    }}>
      <h3>Create Opportunity</h3>
      <label>Name:
        <input
          type='text'
          name='opp_name'
          value={opp_name}
          onChange={handleChange}
        />
      </label>
      <label>Description:
        <input
          type='text'
          name='opp_description'
          value={opp_description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
