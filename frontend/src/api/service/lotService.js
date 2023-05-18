import APIBase from "./core";

class LotService extends APIBase {
  constructor() {
    super("");
  }

  create({ luckCnt, maxLotsCnt, uuid, title }) {
    return this.baseHTTP
      .post(`${uuid}/drawlot`, { luckCnt, maxLotsCnt, title })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  getList(uuid) {
    return this.baseHTTP
      .get(`${uuid}/drawlot`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  get(uuid, id) {
    return this.baseHTTP
      .get(`${uuid}/drawlot/${id}`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

const lotService = new LotService();
export default lotService;
