import { useQuery } from "react-query";
import lotService from "../service/lotService";

const LOT_KEY = "drink_evaluation";

export const useGetLotList = (uuid) =>
  useQuery([LOT_KEY, uuid], () => lotService.getList(uuid));

export const useGetLot = (uuid, id) =>
  useQuery([LOT_KEY, id], () => lotService.get(uuid, id));
