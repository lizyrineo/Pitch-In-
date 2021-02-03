import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneOrganization } from "../../services/organizations";
import EditOpportunity from "../EditOpportunity/EditOpportunity";
import CreateOpportunity from "../CreateOpportunity/CreateOpportunity";
import "./Opportunities.css";

export default function Opportunities(props) {
  const { opportunities, handleDelete } = props;
  const [organization, setOrganization] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchOrganization = async (id) => {
      const organizationData = await getOneOrganization(id);
      setOrganization(organizationData);
    };
    fetchOrganization(id);
  }, [id]);

  const filterOpportunity = (id) => {
    handleDelete(id);
    setOrganization((prevState) => ({
      ...prevState,

      opportunities: prevState.opportunities.filter((opp) => opp.id !== id),
    }));
  };

  return organization ? (
    <div className="org">
      <h2>Thank you for your interest in {organization.org_name}!</h2>
      <h3>Opportunities</h3>
      {organization.opportunities.map((opportunity) => (
        <React.Fragment key={opportunity.id}>
          <p>{opportunity.opp_name}</p>
          {/* <Link to={`/opportunities/${opportunity.id}/select`}><button>Select</button></Link> */}
          <div className="edit">
            <Link to={`/organizations/opportunities/${opportunity.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div className="delete">
            <button onClick={() => filterOpportunity(opportunity.id)}>
              Delete
            </button>
          </div>
        </React.Fragment>
      ))}
      <div className="create">
        <Link to={`/organizations/${id}/createOpportunity`}>
          <button>Create</button>
        </Link>
      </div>
    </div>
  ) : (
    false
  );
}
