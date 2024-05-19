import React, { useState } from 'react';
import { signUp } from './AuthAPI';

const SignUpForm = () => {
    const [form, setForm] = useState({
        name: '',
        password: '',
        nickname: '',
        email: '',
        birthdate: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(form);
            alert('회원가입 성공: ' + response.message);
        } catch (error) {
            alert('회원가입 실패: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>이름:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
                <label>비밀번호:</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required />
            </div>
            <div>
                <label>닉네임:</label>
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} required />
            </div>
            <div>
                <label>이메일:</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
                <label>생년월일:</label>
                <input type="date" name="birthdate" value={form.birthdate} onChange={handleChange} required />
            </div>
            <div>
                <label>전화번호:</label>
                <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
