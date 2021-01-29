import React from 'react';
import { Link } from 'react-router-dom';
import Opportunities from './Opportunities'

export default function Organizations(props) {
  const {organizations, opportunities} = props;
  return (
    <div>
      <h3>Organizations</h3>
      {organizations.map(organization => (
        <React.Fragment key={organization.id}>
          <p>{organization.name}</p>
          <Link to={`/opportunities/${opportunities.id}/select`}><button>Select</button></Link>
          </React.Fragment>
      ))}
        <Link to='/organizations/new'><button>Create</button></Link>
    </div>
  )
}
