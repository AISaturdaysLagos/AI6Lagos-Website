import axios from 'axios';
interface requestTypes {
  url: string;
  data: object;
  method: 'get' | 'post' | 'delete' | 'patch';
  headers: object;
}

export const requestHandler = async ({
  url,
  data,
  method,
  headers,
}: requestTypes) => {
  return axios({ url, data, method, headers });
};  
