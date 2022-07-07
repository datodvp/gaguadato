import { client } from '@tilework/opus';

client.setEndpoint('http://localhost:4000/');

export const getData = async (query) => {
  const queryResult = await client.post(query);
  return queryResult;
};
