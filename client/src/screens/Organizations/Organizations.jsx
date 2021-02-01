import React from 'react';
import { Link } from 'react-router-dom';


export default function Organizations(props) {
  const { organizations } = props;
  console.log(organizations)
  return (
    <div>
      <h3>Organizations</h3>
      <div className='container'>
        <button type='button' class='button' onclick={organizations.handleButtonClick}>

        </button>
        {organizations.open && (

       
      <div class='dropdown'>
      {organizations.map(organization => {
        
        return <div key={organization.id}>
          <p>{organization.org_name}</p>
          <Link to={`/organizations/${organizations.id}/select`}></Link>
        </div>
      })}
        </div>
         )}
      </div>
      
      <Link to='/opportunities'>Opportunities</Link>
      <button>Select</button>
    </div>
       )
}
