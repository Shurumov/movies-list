import axios from 'axios';

let axiosClient = null;

class AxiosClient {
  constructor(props = {}) {
    Object.keys(props).forEach((propName) => {
      this[`_${propName}`] = props[propName];
    });

    const localAxios = axios.create({
      baseURL: this._API_URL,
    });

    localAxios.interceptors.request.use((config) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const params = {
        apiKey: this._API_KEY
      };
      return {
        ...config,
        headers,
        params,
      };
    });

    localAxios.interceptors.response.use(
      (response) => response.data,
      async (error) => error,
    );

    this._client = localAxios;
  }

  getAxios() {
    return this._client;
  }
}

function init(props) {
  axiosClient = new AxiosClient(props);
}

function getAxios() {
  return axiosClient.getAxios();
}

export { init, getAxios };
