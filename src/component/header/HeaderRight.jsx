import React from "react";

const HeaderRight = ({ isActive }) => {
  return (
    <div className={`header-right ${isActive ? 'active' : ''}`}> 
        <nav className="nav">
            <a href="#">회원 가입</a>
            <a href="#">로그인</a>
        </nav>
    </div>
  );
};

export default HeaderRight;