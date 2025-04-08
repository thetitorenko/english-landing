function togglePanel(el) {
const panel = el.nextElementSibling;
panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.1 });

sections.forEach(section => {
observer.observe(section);
});

function toggleMenu() {
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});
});

// Read More functionality
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const reviewText = this.previousElementSibling;
        const isCollapsed = reviewText.classList.contains('collapsed');
        
        reviewText.classList.toggle('collapsed');
        reviewText.classList.toggle('expanded');
        
        this.textContent = isCollapsed ? 'Свернуть' : 'Читать полностью';
    });
});