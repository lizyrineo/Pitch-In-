import React, { useState, useEffect } from 'react'
import './EditOpportunity.css';
import { useParams } from 'react-router-dom'
import { getOneOpportunity } from '../../services/opportunities';

export default function EditOpportunity(props) {
  const [formData, setFormData] = useState({
    opp_name: '',
    opp_description: ''
  })
  const { opp_name, opp_description, opp_image } = formData;
  const { opportunities, handleChange } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = async () => {
      const opportunity = await getOneOpportunity(id)   
      setFormData({
        opp_name: opportunity.opp_name,
        opp_description: opportunity.opp_description
      })
    }
    prefillFormData()
  },[])

  const handleOppChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleChange(id, formData)
    }}>
      <div className='edit-opp'>
      <h3>Edit Opportunity</h3>
      <label>Name:
        <input
          type='text'
          name='opp_name'
          value={opp_name}
          onChange={handleOppChange}
        />
      </label>
      <br />
      <label>Description:
        <textarea
            rows='5'
            columns='50'
          name='opp_description'
          value={opp_description}
          onChange={handleOppChange}
        />
      </label>
      <br />
      {/* <label>Image:
        <input
          type='text'
          opp_description='opp_image'
          value={opp_image}
          onChange={handleChange}
        />
      </label> */}
        <button>Submit</button>
        </div>
    </form>
  )
}
