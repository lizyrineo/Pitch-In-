import api from './api-config';

export const getAllOpportunities = async (id) => {
  const resp = await api.get(`/organizations/${id}/opportunities`);
  console.log(resp)
  return resp.data;

}

export const postOpportunity = async (id, formData) => {
  const resp = await api.post(`/organizations/${id}/opportunities`, {opportunity:formData});
  console.log(resp)
  return resp.data;

}

export const deleteOpportunity = async (id) => {
  const resp = await api.delete(`/organizations/id/opportunities/${id}`)
  return resp
}

export const editOpportunity = async (id, formData) => {
  const resp = await api.put(`/organizations/id/opportunities/${id}`, {opportunity:formData});
  console.log(resp)
  return resp.data;

}

export const getOneOpportunity = async (id) => {
  const resp = await api.get(`/organizations/id/opportunities/${id}`)
  return resp.data
}