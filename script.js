
window.addEventListener('scroll', function () {
    document.querySelectorAll('.content').forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight - 50) {
            box.classList.add('visible');
        }
    });
});


document.querySelectorAll('.faq h3').forEach(faq => {
    faq.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});


const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});
