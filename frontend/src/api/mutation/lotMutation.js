import { useMutation } from "react-query";
import lotService from "../service/lotService";

export const useCreateLot = ({ luckCnt, maxLotsCnt, uuid, title }) =>
  useMutation(() => lotService.create({ luckCnt, maxLotsCnt, uuid, title }));

export const useTryLot = ({ uuid, id, user }) =>
  useMutation(() => lotService.try({ uuid, id, user }));
