import React from "react";
import { Link } from 'react-router-dom';

const HeaderRight = ({ isActive }) => {
  return (
    <div className={`header-right ${isActive ? 'active' : ''}`}> 
        <nav className="nav">
          <Link to="/signUp">회원 가입</Link>
          <Link to="/login">로그인</Link>
        </nav>
    </div>
  );
};

export default HeaderRight;