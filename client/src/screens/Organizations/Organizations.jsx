import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from 'react-dropdown';

export default function Organizations(props) {
  const { organizations } = props;
  const history = useHistory();
  const options = organizations.map(organization => {
    return { label: organization.org_name, value: organization.id }
})
  function selectItem(e) {
    console.log(e.value)
    history.push(`/organizations/${e.value}/opportunities`)
}
  return (
    <div>
      <Dropdown options={options} type='button' placeholder="Select an Organization" onChange={selectItem}>
        

      </Dropdown>
      {/* {organizations.map(organization => {
        
        return <div key={organization.id}>
          <p>{organization.org_name}</p>
          <Link to={`/organizations/${organizations.id}/select`}></Link>
        </div>
      })} */}
      
      <Link to='/opportunities'>Opportunities</Link>
      <button>Select</button>
    </div>
       )
}
