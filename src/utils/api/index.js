import axios from 'axios';

let axiosClient = null;

class AxiosClient {
  constructor(props = {}) {
    this.logoutSubscribers = [];

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
      return {
        ...config,
        headers,
      };
    });

    localAxios.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        const { response = {} } = error;

        return {
          status: response.status,
          ...response.data,
        };
      },
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
