// // Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Active navigation link on scroll
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav-link');

// function updateActiveNav() {
//     const scrollY = window.pageYOffset;

//     sections.forEach(section => {
//         const sectionHeight = section.offsetHeight;
//         const sectionTop = section.offsetTop - 100; // Adjust offset for fixed header
//         const sectionId = section.getAttribute('id');

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href').includes(sectionId)) {
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });
// }

// window.addEventListener('scroll', updateActiveNav);

// // Intersection Observer for scroll animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in-up');
//         }
//     });
// }, observerOptions);

// // Observe all relevant elements for fade-in animation
// document.querySelectorAll('.campus-section, .service-card, .workshop-card, .workshop-detail-section, .monitor-card').forEach(element => {
//     observer.observe(element);
// });

// // Header parallax effect
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const header = document.querySelector('.header');
//     if (header) {
//         header.style.backgroundPositionY = `${-scrolled * 0.3}px`;
//     }
// });

// // Add loading animation
// window.addEventListener('load', () => {
//     document.body.style.opacity = '0';
//     setTimeout(() => {
//         document.body.style.transition = 'opacity 0.5s ease-in';
//         document.body.style.opacity = '1';
//     }, 100);
// });

// // Lazy loading for images (if data-src is used)
// const lazyLoadImages = () => {
//     const images = document.querySelectorAll('img[data-src]');
    
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.removeAttribute('data-src');
//                 observer.unobserve(img);
//             }
//         });
//     });
    
//     images.forEach(img => imageObserver.observe(img));
// };

// // Initialize
// document.addEventListener('DOMContentLoaded', () => {
//     updateActiveNav();
//     lazyLoadImages();
// });

// // Handle window resize (if needed in future)
// let resizeTimer;
// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         // Any resize specific logic can go here
//     }, 250);
// });

// // Console message
// console.log('%cCEUB-FATECS', 'font-size: 24px; font-weight: bold; color: #3b004d;');
// console.log('%cMonitoria dos Cursos de TI', 'font-size: 14px; color: #666;');
// console.log('%cDesenvolvido com ❤️ para a comunidade acadêmica', 'font-size: 12px; color: #999;');

