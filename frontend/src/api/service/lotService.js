import APIBase from "./core";

class LotService extends APIBase {
  constructor() {
    super("");
  }

  create({ luckCnt, maxLotsCnt, uuid }) {
    return this.baseHTTP
      .post(`${uuid}/drawlot`, { luckCnt, maxLotsCnt })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  getList(uuid) {
    return this.baseHTTP
      .get(`${uuid}/drawlot`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

const lotService = new LotService();
export default lotService;
