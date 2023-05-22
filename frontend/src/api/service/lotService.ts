import { CreateLotDto, TryLot } from "../../types/lot";
import APIBase from "./core";

class LotService extends APIBase {
  constructor() {
    super("");
  }

  create(data: CreateLotDto) {
    return this.baseHTTP
      .post(`${data.uuid}/drawlot`, {
        luckCnt: data.luckCnt,
        maxLotsCnt: data.maxLotsCnt,
        title: data.title,
      })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  getList(uuid: string) {
    return this.baseHTTP
      .get(`${uuid}/drawlot`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  get(uuid: string, id: string) {
    return this.baseHTTP
      .get(`${uuid}/drawlot/${id}`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  try(data: TryLot) {
    return this.baseHTTP
      .post(`${data.uuid}/drawlot/${data.id}/try`, { user: data.user })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

const lotService = new LotService();
export default lotService;
