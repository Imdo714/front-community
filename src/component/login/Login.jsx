import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../useContext/AuthContext"; 
import './Login.css'
import LoginForm from './LoginForm';
import LoginLinks from './LoginLinks';
import SocialLogin from './SocialLogin';
import requestApi from "../../api/RequestApi";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
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
            login(result.data.accessToken, result.data.userName, result.data.userId);
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