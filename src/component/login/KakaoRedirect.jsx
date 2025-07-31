import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      console.warn("인가 코드 없음: 로그인 시도되지 않음");
      return;
    }
    
    axios
      .post(import.meta.env.VITE_KAKAO_BACK_REDIRECT_URI, { code }, { headers: {"Content-Type": "application/json", },}

      )
      .then((res) => {
        console.log("로그인 성공", res.data);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        console.error("로그인 실패", err);
      });
  }, []);

  return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoRedirect;
