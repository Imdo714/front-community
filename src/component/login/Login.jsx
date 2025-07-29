import React from "react";
import './Login.css'
import LoginForm from './LoginForm';
import LoginLinks from './LoginLinks';
import SocialLogin from './SocialLogin';

const Login = () => {
    return(
        <div class="login-page">
            <div class="login-container">
                <h2>로그인</h2>
                <LoginForm />
                <LoginLinks />
                <SocialLogin />
            </div>
        </div>
    )
}

export default Login;