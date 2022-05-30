import axios from 'axios';

const instanceHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'https://private-9d65b3-tinnova.apiary-mock.com/'
});

instance.interceptors.response.use(
  ({ data }) => data,
  async (error) => {
    return Promise.reject(error);
  }
);

export const getUsers = () => {
  return instance.get('users');
}

export default async function TinnovaRequestHandler(
  url,
  method,
  body = undefined
) {
  const config = {
    headers: {
      ...instanceHeader,
    },
  };

  if (method === 'GET' && body) {
    config.params = body;
    config.data = undefined;
  } else {
    config.data = body;
  }

  return instance.request({
    url,
    method,
    ...config,
  });
}
