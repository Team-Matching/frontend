import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const signUp = async (memberDto) => {
    try {
        const response = await apiClient.post('/member/signUp', memberDto);
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};

export const signIn = async (signInRequest) => {
    try {
        const response = await apiClient.post('/member/signIn', signInRequest);
        // 로그인 성공 시 토큰을 로컬 스토리지에 저장
        if (response.data && response.data.body.token) {
            localStorage.setItem('token', response.data.body.token);
        }
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};