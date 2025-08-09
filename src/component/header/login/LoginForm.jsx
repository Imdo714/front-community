import React from "react";

const LoginForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">아이디 또는 이메일</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>
        
        <button type="submit" className="login-btn">로그인</button>
    </form>
  );
};

export default LoginForm;
