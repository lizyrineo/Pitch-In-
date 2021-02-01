import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function EditOpportunity(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })
  const { opp_name, opp_description, opp_image } = formData;
  const { opportunities } = props;
  const { id } = useParams();
  const { handleCreate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const opportunityItem = opportunities.find((opportunityItem) => {
        return opportunityItem.id === id
      })
      setFormData({
        name: opportunityItem.name
      })
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      <h3>Edit Opportunity</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={opp_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Description:
        <input
          type='text'
          opp_description='opp_description'
          value={opp_description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Image:
        <input
          type='text'
          opp_description='opp_image'
          value={opp_image}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
