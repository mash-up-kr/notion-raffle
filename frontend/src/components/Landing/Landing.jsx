import { NavLink, useParams } from "react-router-dom";
import style from "./Landing.module.scss";
import { useGetLotList } from "../../api/query/lotQuery";

function Landing() {
  const { uuid } = useParams();
  const { data, isSuccess } = useGetLotList(uuid);

  if (!(isSuccess && data.list)) return null;

  return (
    <div className={style.Landing}>
      <h1>노션 임베딩 만들기</h1>
      <div>
        <NavLink to={`/embed/${uuid}/create-lot`}>제비 뽑기</NavLink>
      </div>
      <div>
        <h3>만든 제비 뽑기 목록</h3>
        <div>
          {data.list.map((lot) => {
            return (
              <div>
                <NavLink to={`/embed/${uuid}/lot/${lot.id}`}>
                  제비 뽑기 {lot.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div>
          <a href="/ladder" tag="a">
            사다리 타기
          </a>
        </div>
        <div>
          <a href="/vote" tag="a">
            투표하기
          </a>
        </div> */}
    </div>
  );
}

export default Landing;
