import { useQuery } from "react-query";
import embedService from "../service/embedService";

const UUID_KEY = "drink_evaluation";

export const useGetEmbedUrl = () =>
  useQuery([UUID_KEY], () => embedService.get());
