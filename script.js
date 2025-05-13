
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}


document.getElementById('magicButton').addEventListener('click', () => {
    const text = document.getElementById('buttonText');
    text.textContent = 'Magic happened! ✨';
    text.style.color = text.style.color === 'purple' ? 'black' : 'purple';
});

function hoverEffect(isHover) {
    const button = document.getElementById('magicButton');
    button.style.background = isHover ? '#c2185b' : '#ff4081';
}

function secretAction() {
    alert('🎉 Secret Double-Click Unlocked! You found the magic!');
}

// Tabs
function openTab(index) {
    document.querySelectorAll('.tab-button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.tab-content').forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
}

// Form Validation
document.getElementById('signupForm').querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => validateField(input));
});

function validateField(input) {
    const error = document.getElementById(`${input.id}Error`);
    if (input.id === 'name' && !input.value.trim()) {
        error.textContent = 'Name is required';
        return false;
    }
    if (input.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        error.textContent = 'Invalid email format';
        return false;
    }
    if (input.id === 'password' && input.value.length < 8) {
        error.textContent = 'Password must be at least 8 characters';
        return false;
    }
    error.textContent = '';
    return true;
}

function validateForm(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('#signupForm input');
    let isValid = true;
    inputs.forEach(input => {
        if (!validateField(input)) isValid = false;
    });
    if (isValid) {
        alert('Form submitted successfully! 🎉');
        document.getElementById('signupForm').reset();
        document.querySelectorAll('.error').forEach(error => error.textContent = '');
    }
}

// Keypress Detection
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.activeElement.tagName !== 'INPUT') {
        document.getElementById('magicButton').click();
    }
});