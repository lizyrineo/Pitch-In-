import React from 'react';
import {Link,} from 'react-router-dom';

export default function Opportunity(props) {
  const {opportunities, handleDelete} = props;
  return (
    <div>
      <h3>Opportunities</h3>
      {opportunities.map(opportunity => (
        <React.Fragment key={opportunities.id}>
          <p>{opportunity.name}</p>
          <Link to={`/opportunities/${opportunities.id}/select`}><button>Select</button></Link>
          <button onClick={()=>handleDelete(opportunities.id)}>Delete</button>
          </React.Fragment>
      ))}
      <Link to='/opportunities/new'><button>Create</button></Link>
    </div>
  )
}
