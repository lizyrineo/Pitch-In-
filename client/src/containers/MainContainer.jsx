import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import CreateOrganization from "../screens/CreateOrganization/CreateOrganization";
import CreateOpportunity from "../screens/CreateOpportunity/CreateOpportunity";
import EditOpportunity from "../screens/EditOpportunity/EditOpportunity";
// import EditOrganization from '../screens/EditOrganiztion/EditOrganization'
import Opportunities from "../screens/Opportunities/Opportunities";
import Organizations from "../screens/Organizations/Organizations";
import { getAllOrganizations } from "../services/organizations";
import { deleteOpportunity, editOpportunity, postOpportunity, getAllOpportunities } from "../services/opportunities";


export default function MainContainer() {
  const [organizations, setOrganizations] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrganizations = async () => {
      const OrganizationData = await getAllOrganizations();
      setOrganizations(OrganizationData);
    };
    fetchOrganizations();
  }, []);

  // useEffect(() => {
  //   const fetchOpportunity = async () => {
  //     const opportunityData = await getAllOpportunities();
  //     setOpportunities(opportunityData);
  //   }
  //   fetchOpportunity();
  // }, []);

  const handleOrgCreate = async (organizationData) => {
    const newOrganization = await organizationData;
    setOrganizations((prevState) => [...prevState, newOrganization]);
    history.push("Organizations");
  };

  const handleOppCreate = async (id, opportunityData) => {
    const newOpportunity = await postOpportunity(id, opportunityData);
    setOpportunities((prevState) => [...prevState, newOpportunity]);
    history.push("Opportunities");
  };

  const handleOppDelete = async (id) => {
    await deleteOpportunity(id)
    setOpportunities(prevState => prevState.filter(opp => opp.id !== id))
    history.push("Opportunities");
  }

  const handleOppChange = async (id, opportunityData) => {
    const updatedOpportunity = await editOpportunity(id, opportunityData)
    setOpportunities(prevState => prevState.map(opp => {
      return opp.id === Number(id) ? updatedOpportunity : opp
    }))
    history.goBack();
  }

  return (
    <Switch>
      <Route path="/organizations/new">
        <CreateOrganization handleCreate={handleOrgCreate} />
      </Route>
      <Route path="/organizations/opportunities/:id/edit">
        <EditOpportunity opportunities={opportunities} handleChange={handleOppChange} />
      </Route>
      <Route path="/organizations/:id/opportunities">
        <Opportunities opportunities={opportunities} handleDelete={handleOppDelete} />
      </Route>
      <Route path="/organizations/:id/createOpportunity">
        <CreateOpportunity handleCreate={handleOppCreate} />
      </Route>
      {/* <Route path="/organizations/:id/edit">
        <EditOrganization organizations={organizations} />
      </Route> */}
      
      <Route path="/organizations">
        <Organizations organizations={organizations} />
      </Route>
      
    </Switch>
  );
}
