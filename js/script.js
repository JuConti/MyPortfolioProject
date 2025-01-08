
  // Main JavaScript File

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Animation for Portfolio Items
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Contact Form Validation
document.querySelector('.contact-form form').addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for reaching out!');
        e.target.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
