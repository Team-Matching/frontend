import { addProfile } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const addProfileForm = document.getElementById('addProfileForm');
    addProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const career = document.getElementById('career').value;
        const certification = document.getElementById('certification').value;
        const education = document.getElementById('education').value;
        const skill = document.getElementById('skill').value;
        addProfile({ career, certification, education, skill });
    });
});
