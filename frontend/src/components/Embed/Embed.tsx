import { useNavigate, useParams } from 'react-router-dom';
import { useGetLotList } from '../../api/query/lotQuery';

interface Lot {
  id: string;
  title: string;
  maxLotsCnt: number;
  luckCnt: number;
  luckIdxs: number[];
  triedUsers: string[];
}

export function Embed() {
  const { uuid } = useParams();
  const { data, isSuccess } = useGetLotList(uuid);
  const navigate = useNavigate();

  if (!(isSuccess && data.list)) return null;

  return (
    <div>
      <div className='flex flex-col gap-2'>
        {data.list.map((lot: Lot) => {
          return (
            <div className='relative'>
              <progress
                className=' progress progress-warning btn btn-info hover:bg-sky-500 text-base p-2 rounded-lg flex items-center justify-center '
                onClick={() => navigate(`/embed/${uuid}/lot/${lot.id}`)}
                value={lot.triedUsers.length}
                max={lot.maxLotsCnt}
              ></progress>
              <div
                className='absolute left-1/2 top-1/2 text-base subpixel-antialiased font-bold'
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                {lot.title}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='btn btn-circle absolute bottom-4 right-4'
        onClick={() => navigate(`/embed/${uuid}/create-lot`)}
      >
        <svg
          fill='none'
          stroke='currentColor'
          stroke-width='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 6v12m6-6H6'
          ></path>
        </svg>
      </button>
    </div>
  );
}
