import HttpClient from './utils/HttpClient';

class AplicativosService {
  httpClient: any;

  constructor() {
    this.httpClient = new HttpClient(`${process.env.REACT_APP_API}`);
  }

  async getAll() {
    return this.httpClient.get(`/v1/aplicativos`);
  }
}

export default new AplicativosService();
