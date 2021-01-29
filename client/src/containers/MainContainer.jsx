import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import CreateOrganization from "../screens/CreateOrganization";
import CreateOpportunity from "../screens/CreateOpportunity"
import EditOrganization from "../screens/EditOpportunity";
import Opportunities from "../screens/Opportunities";
import Organizations from "../screens/Organizations";
import { getAllOrganizations, postOrganization } from '../services/organizations';
import { getAllOpportunities, postOpportunity } from '../services/opportunities';

export default function MainContainer() {
  const [organizations, setOrganizations] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrganizations = async () => {
      const OrganizationData = await getAllOrganizations();
      setOrganizations(OrganizationData)
    }
    fetchOrganizations();
  }, []);

  useEffect(() => {
    const fetchOpportunity = async () => {
      const opportunityData = await getAllOpportunities();
      setOpportunities(opportunityData);
    }
    fetchOpportunity();
  }, []);

  const handleCreate = async (organizationData) => {
    const newOrganization = await (organizationData);
    setOrganizations(prevState=>[ ...prevState, newOrganization])
    history.push('Organizations')
  }

  return (
    <Switch>
      <Route path='/opportunities'>
        <Opportunities
          opportunities={opportunities}
        />
      </Route>
      <Route path='/organizations/:id/edit'>
        <EditOrganization
        organizations={organizations}
          />
      </Route>
      <Route path='/organizations/new'>
        <CreateOrganization
          handleCreate={handleCreate}
        />
      </Route>

      <Route path='/opportunities/:id/edit'>
        <EditOrganization
        opportunities={opportunities}
          />
      </Route>
      <Route path='/opportunities/new'>
        <CreateOpportunity
          handleCreate={handleCreate}
        />
      </Route>
    </Switch>
  )
}
