import React, { useEffect, useState } from 'react';
import { getCareer, getCertification, getEducation, getSkill, getInterest } from './ProfileAPI';

const Profile = () => {
    const [careers, setCareers] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [educations, setEducations] = useState([]);
    const [skills, setSkills] = useState([]);
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const careerData = await getCareer();
                setCareers(careerData.data);

                const certificationData = await getCertification();
                setCertifications(certificationData.data);

                const educationData = await getEducation();
                setEducations(educationData.data);

                const skillData = await getSkill();
                setSkills(skillData.data);

                const interestData = await getInterest();
                setInterests(interestData.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div>
            <h1>Profile</h1>

            <h2>Careers</h2>
            <ul>
                {careers.map((career, index) => (
                    <li key={index}>{career.position} at {career.company}</li>
                ))}
            </ul>

            <h2>Certifications</h2>
            <ul>
                {certifications.map((certification, index) => (
                    <li key={index}>{certification.name} - {certification.issuer}</li>
                ))}
            </ul>

            <h2>Educations</h2>
            <ul>
                {educations.map((education, index) => (
                    <li key={index}>{education.institution} - {education.degree}</li>
                ))}
            </ul>

            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>

            <h2>Interests</h2>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
