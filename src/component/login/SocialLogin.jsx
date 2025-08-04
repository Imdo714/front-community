import React from "react";

const SocialLogin = () => {

  const kakaoLogin = () => {
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const scope = "profile_nickname";

    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    window.location.href = kakaoUrl;
  };

  const googleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_SERVER}/oauth2/authorization/google`;
  };

  return (
    <div className="social-login">
      <p>SNS 계정으로 로그인</p>
      <button className="kakao" onClick={kakaoLogin}>카카오 로그인</button>
      <button className="google" onClick={googleLogin}>G 구글 로그인</button>
    </div>
  );
};

export default SocialLogin;
