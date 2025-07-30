import { useEffect } from "react";
import axios from "axios";

const KakaoRedirect = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      axios
        .post(import.meta.env.VITE_KAKAO_BACK_REDIRECT_URI, { code }, { headers: {"Content-Type": "application/json", },}

        )
        .then((res) => {
          console.log("로그인 성공", res.data);
        })
        .catch((err) => {
          console.error("로그인 실패", err);
        });
    }
  }, []);

  return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoRedirect;
