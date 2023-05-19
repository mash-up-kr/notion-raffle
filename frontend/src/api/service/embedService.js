import APIBase from "./core";

class EmbedService extends APIBase {
  constructor() {
    super("");
  }

  get() {
    return this.baseHTTP
      .get(`embed-url`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

const embedService = new EmbedService();
export default embedService;
