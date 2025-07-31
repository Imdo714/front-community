import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import LoginForm from './LoginForm';
import LoginLinks from './LoginLinks';
import SocialLogin from './SocialLogin';
import requestApi from "../../api/RequestApi";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await requestApi("/login", "POST", formData);
            console.log(result)
            alert("로그인 성공");
            // 데이터를 브라우저에 반영구적으로 저장브라우저를 종료 후 재시작해도 데이터가 남아있음
            localStorage.setItem("accessToken", result.data.accessToken);
            navigate("/");
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