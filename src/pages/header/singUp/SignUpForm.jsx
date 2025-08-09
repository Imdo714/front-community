import React from "react";
import FormInput from "../../../component/header/signUp/FormInput";

const SignUpForm = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <FormInput label="이메일" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <FormInput label="비밀번호" id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
        <FormInput label="이름" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <FormInput label="캠프 출신" id="userClass" name="userClass" value={formData.userClass} onChange={handleChange} placeholder="예: KH 77기" />
        <FormInput label="목표" id="userTarget" name="userTarget" value={formData.userTarget} onChange={handleChange} placeholder="예: 스프링 개발자" />
        <button type="submit" className="signup-btn">회원가입</button>
    </form>
);

export default SignUpForm;
