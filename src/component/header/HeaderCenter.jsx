import React from "react";

const HeaderCenter = ({ isActive }) => {
  return (
    // isActive가 true면 클래스명에 active가 붙어 토글 작동
    <div className={`header-center ${isActive ? 'active' : ''}`}>
        <nav className="nav">
            <a href="#">기상</a>
            <a href="#">커뮤니티</a>
            <a href="#">스터디</a>
        </nav>
    </div>
  );
};

export default HeaderCenter;
