import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

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

export const saveCareer = async (careerDto) => {
    const response = await apiClient.post('/member/profile/career', careerDto);
    return response.data;
};

export const getCareer = async () => {
    const response = await apiClient.get('/member/profile/career');
    return response.data;
};

export const saveCertification = async (certificationDto) => {
    const response = await apiClient.post('/member/profile/certification', certificationDto);
    return response.data;
};

export const getCertification = async () => {
    const response = await apiClient.get('/member/profile/certification');
    return response.data;
};

export const saveEducation = async (educationDto) => {
    const response = await apiClient.post('/member/profile/education', educationDto);
    return response.data;
};

export const getEducation = async () => {
    const response = await apiClient.get('/member/profile/education');
    return response.data;
};

export const saveSkill = async (skillRequest) => {
    const response = await apiClient.post('/member/profile/skill', skillRequest);
    return response.data;
};

export const getSkill = async () => {
    const response = await apiClient.get('/member/profile/skill');
    return response.data;
};

export const saveInterest = async (interestRequest) => {
    const response = await apiClient.post('/member/profile/interest', interestRequest);
    return response.data;
};

export const getInterest = async () => {
    const response = await apiClient.get('/member/profile/interest');
    return response.data;
};
