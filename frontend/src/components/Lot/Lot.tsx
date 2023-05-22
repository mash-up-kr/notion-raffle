import { useState } from 'react';
import './Lot.css';
import { useGetLot } from '../../api/query/lotQuery';
import { useParams } from 'react-router-dom';
import { useTryLot } from '../../api/mutation';

export function Lot() {
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
    <div className='container items-center'>
      <div className='text-2xl font-bold my-3'>{data.title}</div>
      <div className=''>
        <div className='block font-bold mb-2'>
          제비 개수 : {data.maxLotsCnt}
        </div>
      </div>
      <div className=''>
        <div className='block font-bold mb-2'>당첨 개수 : {data.luckCnt}</div>
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
      <button className='btn my-3' onClick={handleDraw}>
        제비 뽑기
      </button>
      {result && <p className='result'>추첨 결과: {result}</p>}
    </div>
  );
}
