import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../useContext/AuthContext"; 

const HeaderRight = ({ isActive }) => {
  const { isLoggedIn, userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`header-right ${isActive ? 'active' : ''}`}> 
        <nav className="nav">
          {isLoggedIn ? 
          (
            <>
              <span style={{ marginRight: "10px" }}>{ userName }님</span>
              <a onClick={handleLogout} style={{cursor: "pointer"}}>로그아웃</a>
            </>
          ) : (
            <>
              <Link to="/signUp">회원 가입</Link>
              <Link to="/login">로그인</Link>
            </>
          )}
        </nav>
    </div>
  );
};

export default HeaderRight;