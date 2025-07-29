import React, { useState } from "react";
import './Login.css'
import LoginForm from './LoginForm';
import LoginLinks from './LoginLinks';
import SocialLogin from './SocialLogin';
import requestApi from "../../api/RequestApi";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await requestApi("/login", "POST", formData);
            alert("로그인 성공");
            // accessToken 처리 해야 함
        } catch (error) {
            console.error(error);
            alert(error.message || "로그인 실패");
        }
    };

    return(
        <div class="login-page">
            <div class="login-container">
                <h2>로그인</h2>
                <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <LoginLinks />
                <SocialLogin />
            </div>
        </div>
    )
}

export default Login;