import { CreateLotDto, TryLot } from '../../types/lot';
import APIBase from './core';
import { ListResponse } from '@notion-raffle/util';

class LotService extends APIBase {
  constructor() {
    super('');
  }

  async create(data: CreateLotDto) {
    return this.baseHTTP
      .post(`${data.uuid}/drawlot`, {
        luckCnt: data.luckCnt,
        maxLotsCnt: data.maxLotsCnt,
        title: data.title,
      })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  async getList(uuid: string): Promise<ListResponse<any>> {
    return this.baseHTTP
      .get(`${uuid}/drawlot`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  async get(uuid: string, id: string) {
    return this.baseHTTP
      .get(`${uuid}/drawlot/${id}`)
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }

  async try(data: TryLot) {
    return this.baseHTTP
      .post(`${data.uuid}/drawlot/${data.id}/try`, { user: data.user })
      .then(APIBase._handleResponse)
      .catch(APIBase._handleError);
  }
}

const lotService = new LotService();
export default lotService;
