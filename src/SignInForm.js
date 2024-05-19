import React, { useState } from 'react';
import { signIn } from './AuthAPI';

const SignInForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
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
            const response = await signIn(form);
            if (response.body && response.body.token) {
                localStorage.setItem('token', response.body.token);
                alert('로그인 성공: ' + response.message);
            } else {
                alert('로그인 응답에 토큰이 없습니다.');
            }
            // 추가적인 로그인 성공 처리 로직 (예: 페이지 이동 등)
        } catch (error) {
            alert('로그인 실패: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required />
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
