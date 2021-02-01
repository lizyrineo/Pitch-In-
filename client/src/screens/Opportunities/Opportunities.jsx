import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneOrganization } from '../../services/organizations';
import EditOpportunity from './screens/EditOpportunity/EditOpportunity';
import CreateOpportunity from '.screens/CreateOpportunity/CreateOpportunity';


export default function Opportunities(props) {
  const { opportunities, handleDelete } = props;
  const [organization, setOrganization] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchOrganization = async (id) => {
      const organizationData = await getOneOrganization(id);
      setOrganization(organizationData);
    }
    fetchOrganization(id);
  }, []);

  return (
    
    organization ? 
      <div>
      <h2>Thank you for your interest in {organization.org_name}!</h2> 
      <h3>Opportunities</h3>
      {organization.opportunities.map(opportunity => (
        <React.Fragment key={opportunities.id}>
          <p>{opportunity.opp_name}</p>
          <Link to={`/opportunities/${opportunities.id}/select`}><button>Select</button></Link>
          <Link to='/editOpportunity'><button>Edit</button></Link>
          <Link to='/createOpportunity'><button>Create</button></Link>
          <button onClick={()=>handleDelete(opportunities.id)}>Delete</button>
          </React.Fragment>
      ))}
        
      </div>
      : false
  )
}
