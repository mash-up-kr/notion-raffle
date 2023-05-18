import style from "./Landing.module.scss";

function Landing() {
  return (
    <div className={style.Landing}>
      <div>
        <a href="/create-lot" tag="a">
          제비 뽑기
        </a>
      </div>
      <div>
        <a href="/ladder" tag="a">
          사다리 타기
        </a>
      </div>
      <div>
        <a href="/vote" tag="a">
          투표하기
        </a>
      </div>
    </div>
  );
}

export default Landing;
