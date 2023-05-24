import { useState } from 'react';
import './Lot.css';
import { useGetLot } from '../../api/query/lotQuery';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTryLot } from '../../api/mutation';

export function Lot() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState('익명의 누군가');
  const [result, setResult] = useState('');
  const { uuid, id } = useParams();

  const { data, isSuccess } = useGetLot(uuid, id);
  const { mutateAsync: tryLot } = useTryLot(uuid, id, user);

  if (!(isSuccess && data)) return null;
  const handleDraw = async () => {
    const res = await tryLot();
    const resultText = res.isLucky ? '당첨' : '꽝';
    setResult(resultText);
  };

  return (
    <div className='container'>
      <div className='text-2xl font-bold mb-2'>{data.title}</div>
      <div className='block font-bold'>제비 개수 : {data.maxLotsCnt}</div>
      <div className=''>
        <div className='block font-bold'>당첨 개수 : {data.luckCnt}</div>
      </div>
      <div className='flex'>
        <input
          type='string'
          id='user'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className='w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400'
        />
      </div>
      <div>
        <button
          className='btn mt-2 mx-1'
          onClick={() => navigate(`/embed/${uuid}`)}
        >
          처음으로
        </button>
        <button
          className='btn mt-2 mx-1 bg-green-500 border-0'
          onClick={handleDraw}
        >
          제비 뽑기
        </button>
        <button
          className='btn mt-2 mx-1 bg-emerald-600 border-0'
          onClick={() =>
            navigate(`${location.pathname}/result`, { state: data })
          }
        >
          결과 보기
        </button>
      </div>
      {result && (
        <div className='result font-extrabold'>추첨 결과: {result}</div>
      )}
    </div>
  );
}
