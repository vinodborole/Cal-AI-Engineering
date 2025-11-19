// CalSoft AI Engineering Website - JavaScript
// Interactive features and animations

// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navMenu.contains(event.target) || mobileMenuToggle.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ===== ROI Calculator =====
function calculateROI() {
    const budget = parseFloat(document.getElementById('budget').value) || 1000000;
    const timeline = parseFloat(document.getElementById('timeline').value) || 26;
    const teamSize = parseFloat(document.getElementById('teamsize').value) || 8;
    
    // Calculate savings based on our AI acceleration metrics
    const timeSavingsWeeks = Math.round(timeline * 0.62);
    const costSavings = Math.round(budget * 0.35);
    
    // Update display
    document.getElementById('timeSavings').textContent = `${timeSavingsWeeks} weeks`;
    document.getElementById('costSavings').textContent = `$${costSavings.toLocaleString()}`;
}

// Initialize ROI calculator
if (document.getElementById('budget')) {
    document.getElementById('budget').addEventListener('input', calculateROI);
    document.getElementById('timeline').addEventListener('input', calculateROI);
    document.getElementById('teamsize').addEventListener('input', calculateROI);
    
    // Initial calculation
    calculateROI();
}

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            phone: document.getElementById('phone').value,
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value
        };
        
        // In a real implementation, you would send this data to your backend
        // For now, we'll just show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your interest! We will contact you within 24 hours to schedule your AI strategy session.');
        
        // Reset form
        contactForm.reset();
        
        // In production, you would do something like:
        /*
        fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you! We will contact you within 24 hours.');
            contactForm.reset();
        })
        .catch(error => {
            alert('There was an error submitting the form. Please try again or email us directly.');
            console.error('Error:', error);
        });
        */
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.capability-card, .case-study-card, .industry-card, .engagement-card, .trial-card'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, suffix = '', duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent.trim();
                // Extract number and suffix (e.g., "3x" -> number: 3, suffix: "x")
                const match = text.match(/^(\d+)(.*)$/);
                if (match) {
                    const number = parseInt(match[1]);
                    const suffix = match[2]; // This captures "x", "%", "%+", etc.
                    if (!isNaN(number)) {
                        stat.textContent = '0' + suffix;
                        animateCounter(stat, number, suffix);
                    }
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Scroll Progress Indicator (Optional) =====
function createScrollIndicator() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(135deg, #0066cc 0%, #00a86b 100%)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.2s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Uncomment to enable scroll progress indicator
// createScrollIndicator();

// ===== Performance Optimization: Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== Console Message =====
console.log('%c🚀 CalSoft AI-Accelerated Engineering', 'font-size: 20px; color: #0066cc; font-weight: bold;');
console.log('%c3x Faster Development | 35% Cost Savings | 50% Fewer Defects', 'font-size: 14px; color: #00a86b;');
console.log('%cInterested in joining our team? Visit https://www.calsoftinc.com/careers', 'font-size: 12px; color: #6b6b6b;');
