import api from './api-config';

export const getAllOpportunities = async () => {
  const resp = await api.get('/opportunities');
  return resp.data;
}