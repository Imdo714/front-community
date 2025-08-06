import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 토큰 저장 유무
  const [userName, setUserName] = useState(null); // 회원 이름 

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("userName");
    setIsLoggedIn(!!token);
    if (user) setUserName(user);
  }, []);

  const login = (token, userName) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userName", userName); 
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
