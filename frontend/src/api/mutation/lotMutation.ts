import { useMutation } from 'react-query';
import lotService from '../service/lotService';
import { useNavigate } from 'react-router-dom';
import { CreateLotDto } from '../../types/lot';

export const useCreateLot = (lot: CreateLotDto) => {
  const navigate = useNavigate();

  return useMutation(() => lotService.create(lot), {
    onSuccess: () => {
      navigate(`/embed/${lot.uuid}`);
    },
  });
};

export const useTryLot = (
  uuid: string = '',
  id: string = '',
  user: string = '',
) => useMutation(() => lotService.try({ uuid, id, user }));
