import React, { useState, useEffect } from 'react';
import {
    saveCareer,
    saveCertification,
    saveEducation,
    saveSkill,
    saveInterest,
    getCareer,
    getCertification,
    getEducation,
    getSkill,
    getInterest
} from './ProfileAPI';

const ProfileForm = () => {
    const [careers, setCareers] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [educations, setEducations] = useState([]);
    const [skills, setSkills] = useState([]);
    const [interests, setInterests] = useState([]);

    const [careerInput, setCareerInput] = useState({ position: '', company: '' });
    const [certificationInput, setCertificationInput] = useState({ name: '', issuer: '' });
    const [educationInput, setEducationInput] = useState({ school: '', degree: '' });
    const [skillInput, setSkillInput] = useState({ name: '' });
    const [interestInput, setInterestInput] = useState({ name: '' });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const careerData = await getCareer();
                setCareers(careerData.data || []);

                const certificationData = await getCertification();
                setCertifications(certificationData.data || []);

                const educationData = await getEducation();
                setEducations(educationData.data || []);

                const skillData = await getSkill();
                setSkills(skillData.data || []);

                const interestData = await getInterest();
                setInterests(interestData.data || []);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

    const handleCareerSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveCareer(careerInput);
            setCareers([...careers, response.data]);
            setCareerInput({ position: '', company: '' });
        } catch (error) {
            console.error('Error saving career:', error);
        }
    };

    const handleCertificationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveCertification(certificationInput);
            setCertifications([...certifications, response.data]);
            setCertificationInput({ name: '', issuer: '' });
        } catch (error) {
            console.error('Error saving certification:', error);
        }
    };

    const handleEducationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveEducation(educationInput);
            setEducations([...educations, response.data]);
            setEducationInput({ school: '', degree: '' });
        } catch (error) {
            console.error('Error saving education:', error);
        }
    };

    const handleSkillSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveSkill({ skills: [skillInput] });
            setSkills([...skills, ...response.data]);
            setSkillInput({ name: '' });
        } catch (error) {
            console.error('Error saving skill:', error);
        }
    };

    const handleInterestSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveInterest({ interests: [interestInput] });
            setInterests([...interests, ...response.data]);
            setInterestInput({ name: '' });
        } catch (error) {
            console.error('Error saving interest:', error);
        }
    };

    return (
        <div>
            <h1>Profile</h1>

            <h2>Careers</h2>
            <form onSubmit={handleCareerSubmit}>
                <input
                    type="text"
                    name="position"
                    value={careerInput.position}
                    onChange={(e) => setCareerInput({ ...careerInput, position: e.target.value })}
                    placeholder="Position"
                    required
                />
                <input
                    type="text"
                    name="company"
                    value={careerInput.company}
                    onChange={(e) => setCareerInput({ ...careerInput, company: e.target.value })}
                    placeholder="Company"
                    required
                />
                <button type="submit">Add Career</button>
            </form>
            <ul>
                {careers.map((career, index) => (
                    <li key={index}>{career.position} at {career.company}</li>
                ))}
            </ul>

            <h2>Certifications</h2>
            <form onSubmit={handleCertificationSubmit}>
                <input
                    type="text"
                    name="name"
                    value={certificationInput.name}
                    onChange={(e) => setCertificationInput({ ...certificationInput, name: e.target.value })}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="issuer"
                    value={certificationInput.issuer}
                    onChange={(e) => setCertificationInput({ ...certificationInput, issuer: e.target.value })}
                    placeholder="Issuer"
                    required
                />
                <button type="submit">Add Certification</button>
            </form>
            <ul>
                {certifications.map((certification, index) => (
                    <li key={index}>{certification.name} - {certification.issuer}</li>
                ))}
            </ul>

            <h2>Educations</h2>
            <form onSubmit={handleEducationSubmit}>
                <input
                    type="text"
                    name="school"
                    value={educationInput.school}
                    onChange={(e) => setEducationInput({ ...educationInput, school: e.target.value })}
                    placeholder="School"
                    required
                />
                <input
                    type="text"
                    name="degree"
                    value={educationInput.degree}
                    onChange={(e) => setEducationInput({ ...educationInput, degree: e.target.value })}
                    placeholder="Degree"
                    required
                />
                <button type="submit">Add Education</button>
            </form>
            <ul>
                {educations.map((education, index) => (
                    <li key={index}>{education.school} - {education.degree}</li>
                ))}
            </ul>

            <h2>Skills</h2>
            <form onSubmit={handleSkillSubmit}>
                <input
                    type="text"
                    name="name"
                    value={skillInput.name}
                    onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })}
                    placeholder="Skill"
                    required
                />
                <button type="submit">Add Skill</button>
            </form>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>

            <h2>Interests</h2>
            <form onSubmit={handleInterestSubmit}>
                <input
                    type="text"
                    name="name"
                    value={interestInput.name}
                    onChange={(e) => setInterestInput({ ...interestInput, name: e.target.value })}
                    placeholder="Interest"
                    required
                />
                <button type="submit">Add Interest</button>
            </form>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileForm;
