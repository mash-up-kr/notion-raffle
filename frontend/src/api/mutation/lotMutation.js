import { useMutation } from "react-query";
import lotService from "../service/lotService";

export const useCreateLot = ({ luckCnt, maxLotsCnt, uuid }) =>
  useMutation(lotService.create({ luckCnt, maxLotsCnt, uuid }));
