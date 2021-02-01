import api from './api-config';

export const getAllOpportunities = async (id) => {
  const resp = await api.get(`/organizations/${id}/opportunities`);
  console.log(resp)
  return resp.data;

}