import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">아이디 또는 이메일</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit" className="login-btn">로그인</button>
    </form>
  );
};

export default LoginForm;
