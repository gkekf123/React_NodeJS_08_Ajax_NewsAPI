import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "./Header.module.css";

function Header() {
  /* useNavigate훅 */
  const nav = useNavigate(); // 함수 반환
  console.log(nav);

  const goHome = () => {
    nav("/"); // 홈으로
  };

  const goBack = () => {
    nav(-1); // 뒤로가기
  };

  const goForward = () => {
    nav(1); // 앞으로
  };

  return (
    <Fragment>
      <header className={styled.header}>
        <h3>헤더 파일</h3>
        <ul className={styled.ul}>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>
        <div>
          <button onClick={goHome}>홈 버튼</button>
          <button onClick={goBack}>뒤로 버튼</button>
          <button onClick={goForward}>앞으로 버튼</button>
        </div>
      </header>
      <section>
        <Outlet />
      </section>
    </Fragment>
  );
}

export default Header;
