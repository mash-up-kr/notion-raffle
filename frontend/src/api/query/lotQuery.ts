import { useQuery } from 'react-query';
import lotService from '../service/lotService';

const LOT_KEY = 'drink_evaluation';

export const useGetLotList = (uuid: string = '') =>
  useQuery([LOT_KEY, uuid], () => lotService.getList(uuid), {
    enabled: !!uuid,
  });

export const useGetLot = (uuid: string = '', id: string = '') =>
  useQuery([LOT_KEY, id], () => lotService.get(uuid, id), {
    enabled: !!uuid && !!id,
  });
