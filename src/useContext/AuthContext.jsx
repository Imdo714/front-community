import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export let globalLogout = () => {};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 토큰 저장 유무
  const [userInfo, setUserInfo] = useState(null); // 회원 정보: 이름, Id

  useEffect(() => {
    globalLogout = logout; // 전역 함수에 실제 logout 함수 할당
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUserInfo = localStorage.getItem("userInfo");

    setIsLoggedIn(!!token);

    if (storedUserInfo) {
      try {
        const parsed = JSON.parse(storedUserInfo);
        setUserInfo(parsed);
      } catch (e) {
        console.error("userInfo JSON 파싱 실패", e);
        logout();
      }
    }
  }, []);

  const login = (token, userName, userId) => {
    const userObj = { id: userId, name: userName };
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userInfo", JSON.stringify(userObj));
    setIsLoggedIn(true);
    setUserInfo(userObj);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    setUserInfo(null);
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
