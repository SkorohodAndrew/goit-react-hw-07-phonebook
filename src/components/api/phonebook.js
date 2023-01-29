import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://63d56f9e20b08498cbcdc2f0.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const addContacts = async (name, number) => {
  const newContact = { name, phone: number };
  const { data } = await instanceContacts.post('/', newContact);
  return data;
};

export const removeContacts = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};
