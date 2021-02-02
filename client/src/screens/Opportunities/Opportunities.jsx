import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneOrganization } from '../../services/organizations';
import EditOpportunity from '../EditOpportunity/EditOpportunity';
import CreateOpportunity from '../CreateOpportunity/CreateOpportunity';


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
  }, [id]);

  const filterOpportunity = (id) => {
    handleDelete(id)
    setOrganization(prevState => ({
      ...prevState,
      
      opportunities: prevState.opportunities.filter(opp => opp.id !== id)
    }))
}

  return (
    
    organization ? 
      <div>
      <h2>Thank you for your interest in {organization.org_name}!</h2> 
      <h3>Opportunities</h3>
      {organization.opportunities.map(opportunity => (
        <React.Fragment key={opportunity.id}>
          <p>{opportunity.opp_name}</p>
          <Link to={`/opportunities/${opportunity.id}/select`}><button>Select</button></Link>
          <Link to='/editOpportunity'><button>Edit</button></Link>
          <button onClick={()=>filterOpportunity(opportunity.id)}>Delete</button>
          </React.Fragment>
      ))}
      <Link to={`/organizations/${id}/createOpportunity`}><button>Create</button></Link>
        
      </div>
      : false
  )
}
