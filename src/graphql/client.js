import { client } from '@tilework/opus';

client.setEndpoint('https://gaguadato-endpoint-production.up.railway.app/');

export const getData = async (query) => {
  const queryResult = await client.post(query);
  return queryResult;
};
