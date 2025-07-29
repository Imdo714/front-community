import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'
import SignUpForm from "./SignUpForm";
import requestApi from "../../api/RequestApi";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        userClass: "",
        userTarget: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await requestApi("/join", "POST", formData);
            console.log(result)
            alert("회원가입 성공!");
            navigate("/login");
        } catch (error) {
            console.log(error)
            alert(error.message);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>회원가입</h2>
                <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="links">
                    <a href="/login">이미 계정이 있으신가요? 로그인</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;