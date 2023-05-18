import { useQuery } from "react-query";
import lotService from "../service/lotService";

const LOT_KEY = "drink_evaluation";

export const useGetLotList = (uuid) =>
  useQuery([LOT_KEY], () => lotService.getList(uuid));
