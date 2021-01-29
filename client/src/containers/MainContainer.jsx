import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import CreateOrganization from "../screens/CreateOrganization";
import EditOrganization from "../screens/EditOrganization";
import Opportunities from "../screens/Opportunities";
import Organizations from "../screensOrganizations";
import { getAllOpportunities } from "../services/opportunities";
import { deleteOrganization, getAllOrganizations, postOrganization } from '../servicesOrganizations';

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
    const fetchOpportunities = async () => {
      const opportunityData = await getAllOpportunities();
      setOpportunity(opportunityData);
    }
    fetchOpportunity();
  }, []);

  const handleCreate = async (OrganizationData) => {
    const newOrganization = await (postOrganizationData);
    setOrganizations(prevState=>[ ...prevState, newOrganization])
    history.push('Organizations')
  }

  const handleDelete = async () => {
    await deleteOrganization(id);
    setOrganizations(prevState=> prevState.filter(OrganizationItem => OrganizationItem.id !== id))
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
      <Route path='/organizations'>
        <Organizations
        organizations={organizations}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/opportunities/:id/edit'>
        <EditOrganization
        opportunities={opportunities}
          />
      </Route>
      <Route path='/opportunities/new'>
        <CreateOpportunities
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/opportunities'>
      <Opportunities
      opportunities={opportunities}
          handleDelete={handleDelete}
        />
      </Route>
    </Switch>
  )
}
