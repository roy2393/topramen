import Axios from 'axios';
import ApiPaths from './apiPaths';

let axios = Axios;
axios.defaults.withCredentials = true;

class NetworkClient {
  host: string = '';
  constructor(host: string) {
    this.host = host;
  }


  getRequest = (apiPath: string, data?: any) => {
    console.log('::API REQUEST::', `${this.host}/${apiPath}`, apiPath, data);
    return axios
      .get(`${this.host}/${apiPath}`).then(response => {
        return response.data
      }).catch(err => {
        throw err;
      });
  };

  getRamens = () => {
    return this.getRequest(ApiPaths.TopRamen);
  }
}

export default NetworkClient;
