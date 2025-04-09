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

// Initialize Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable infinite loop
    centeredSlides: true, // Center the active slide
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 20, // Add space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
  });

  const aboutSwiper = new Swiper('.about-carousel', {
    loop: true, // Enable infinite loop
    centeredSlides: true, // Center the active slide
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 20, // Add space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // Show 2 slides on tablets
      },
      1024: {
        slidesPerView: 3, // Show 3 slides on desktops
      },
    },
  });

  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = Math.ceil(target / 200); // Adjust speed by changing the divisor

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 10); // Adjust speed by changing the timeout
      } else {
        counter.innerText = target; // Ensure the final value is correct
      }
    };

    updateCount();
  });
});

function toggleLessons() {
    const hiddenLessons = document.getElementById('hidden-lessons');
    const showMoreBtn = document.getElementById('show-more-btn');

    if (hiddenLessons.style.display === 'none' || hiddenLessons.style.display === '') {
        hiddenLessons.style.display = 'block';
        showMoreBtn.textContent = 'Свернуть';
    } else {
        hiddenLessons.style.display = 'none';
        showMoreBtn.textContent = 'Показать больше';
    }
}