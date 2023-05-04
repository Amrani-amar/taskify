import axios from 'axios';

const API_URL = 'http://localhost:3000/api/taches';

const getAll = async () => {
  const res =  await axios.get(API_URL);
  return res.data;
};

const get = async ({id}) => {
  return await axios.get(`${API_URL}/${id}`);
};

const create = async (data) => {
  return await axios.post(API_URL, data);
};

const update = async (data) => {
    console.log(data);
  return await axios.put(`${API_URL}/${data.id}`, data);
};

const remove = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

const apiTaches = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default apiTaches;


