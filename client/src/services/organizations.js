import api from './api-config';

export const getAllOrganizations = async () => {
  const resp = await api.get('/organizations');
  return resp.data;
}

export const postOrganizations = async (organizationData) => {
  const resp = await api.post('/organizations', organizationData);
  return resp.data;
}
export const deleteOrganizations = async (id) => {
  const resp = await api.delete(`/organizations/${id}`);
  return resp.data;
}