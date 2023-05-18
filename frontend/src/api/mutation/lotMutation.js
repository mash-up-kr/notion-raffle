import { useMutation } from "react-query";
import lotService from "../service/lotService";
import { useNavigate } from "react-router-dom";

export const useCreateLot = ({ luckCnt, maxLotsCnt, uuid, title }) => {
  const navigate = useNavigate();

  return useMutation(
    () => lotService.create({ luckCnt, maxLotsCnt, uuid, title }),
    {
      onSuccess: () => {
        navigate(`/embed/${uuid}`);
      },
    }
  );
};

export const useTryLot = ({ uuid, id, user }) =>
  useMutation(() => lotService.try({ uuid, id, user }));
