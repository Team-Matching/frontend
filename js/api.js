const API_BASE_URL = 'http://localhost:8080/api/members';

export async function signUp(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            alert('Sign up successful!');
            window.location.href = '../index.html';
        } else {
            alert('Sign up failed: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during sign up.');
    }
}

export async function signIn(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            localStorage.setItem('token', data.body.token);
            localStorage.setItem('email', email);
            localStorage.setItem('userId', data.body.userId);
            alert('Sign in successful!');
            window.location.href = '../index.html';
        } else {
            alert('Sign in failed: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during sign in.');
    }
}

export async function loadProfile() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to load profile: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while loading profile.');
    }
}

export async function loadCareer() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/careers`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to load career: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while loading career.');
    }
}

export async function loadCertification() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/certifications`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to load certification: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while loading certification.');
    }
}

export async function loadEducation() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/educations`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to load education: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while loading education.');
    }
}

export async function loadSkill() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/skills`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to load skill: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while loading skill.');
    }
}

export async function loadInterest() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/interests`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to load interest: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while loading interest.');
    }
}

export async function addCareer(career) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/careers`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(career)
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to add career: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding career.');
    }
}

export async function addCertification(certification) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/certifications`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(certification)
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to add certification: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding certification.');
    }
}

export async function addEducation(education) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/educations`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(education)
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to add education: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding education.');
    }
}

export async function addSkill(skill) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/skills`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skill)
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to add skill: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding skill.');
    }
}

export async function addInterest(interest) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/profiles/interests`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(interest)
        });
        const data = await response.json();
        console.log(data); // 응답 데이터를 콘솔에 출력하여 확인
        if (response.ok) {
            return data.data;
        } else {
            alert('Failed to add interest: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding interest.');
    }
}