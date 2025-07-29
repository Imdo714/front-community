import React from "react";
import './SignUp.css'

const SignUp = () => {
    return (
        <div class="signup-page">
            <div class="signup-container">
                <h2>회원가입</h2>
                <form>
                <div class="form-group">
                    <label for="username">아이디</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div class="form-group">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div class="form-group">
                    <label for="camp">캠프 출신</label>
                    <input type="text" id="camp" name="camp" placeholder="예: KH 77기" />
                </div>

                <button type="submit" class="signup-btn">회원가입</button>
                </form> 

                <div class="links">
                <a href="login.html">이미 계정이 있으신가요? 로그인</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;