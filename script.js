// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    document.querySelectorAll('.content').forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight - 50) {
            box.classList.add('visible');
        }
    });
});

// FAQ toggle animation
document.querySelectorAll('.faq h3').forEach(faq => {
    faq.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});

// Intersection Observer to observe elements and add 'visible' class when they come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing the element once it becomes visible
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is in view
});

// Target elements to observe
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});