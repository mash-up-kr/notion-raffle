import './Lot.css';
import { useGetLot } from '../../api/query/lotQuery';
import { useNavigate, useParams } from 'react-router-dom';

export function LotResult() {
  /**
   * @todo
   * 링크로 바로 들어올 때는 api쏘고 이전 페이지에서 오는 경우에는 prop전달받아서 하게 하고 싶다
   */
  const navigate = useNavigate();
  const { uuid, id } = useParams();
  const { data, isSuccess } = useGetLot(uuid, id);

  if (!(isSuccess && data)) return null;

  return (
    <div className='container'>
      <div className='text-2xl font-bold mb-2'>{data.title}</div>
      {data.triedUsers.map((user: string, i: number) =>
        data.luckIdxs.includes(i) ? 당첨(user, i) : 꽝(user, i),
      )}

      <button
        className='btn mt-2 mx-1'
        onClick={() => navigate(`/embed/${uuid}`)}
      >
        처음으로
      </button>
    </div>
  );
}

function 당첨(user: string, i: number) {
  return (
    <div key={i} className='font-bold text-blue-500'>
      {user} - 당첨
    </div>
  );
}

function 꽝(user: string, i: number) {
  return (
    <div key={i} className='font-bold text-red-500'>
      {user} - 꽝
    </div>
  );
}
