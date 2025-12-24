// =====================================
// Mobile Menu Toggle
// =====================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');
const headerThibaux = document.querySelector('.header-thibaux');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        if (mobileMenu.classList.contains('active')) {
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        } else {
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// =====================================
// Header Scroll Effect
// =====================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        if (header) header.classList.add('scrolled');
        if (headerThibaux) headerThibaux.classList.add('scrolled');
    } else {
        if (header) header.classList.remove('scrolled');
        if (headerThibaux) headerThibaux.classList.remove('scrolled');
    }
});

// =====================================
// Smooth Scroll to Contact
// =====================================
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// =====================================
// Smooth Scroll for All Internal Links
// =====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================
// Contact Form Handling
// =====================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const clientType = document.getElementById('clientType') ? document.getElementById('clientType').value : '';
    const service = document.getElementById('service') ? document.getElementById('service').value : '';
    const message = document.getElementById('message').value;
    
    // Create email subject
    const subject = encodeURIComponent(`Demande de contact - ${name}`);
    
    // Create email body with form data
    let emailBody = `Nom: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    emailBody += `Téléphone: ${phone}\n`;
    if (clientType) {
        emailBody += `Type de client: ${clientType}\n`;
    }
    if (service) {
        emailBody += `Service concerné: ${service}\n`;
    }
    if (message) {
        emailBody += `\nMessage:\n${message}`;
    }
    
    // Encode the email body for URL
    const encodedBody = encodeURIComponent(emailBody);
    
    // Create mailto link
    const mailtoLink = `mailto:info@simplyaccounts.be?subject=${subject}&body=${encodedBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    formMessage.textContent = 'Votre client de messagerie s\'ouvre. Merci pour votre message !';
    formMessage.className = 'form-message success';
    
    // Reset form after a short delay
    setTimeout(() => {
        contactForm.reset();
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }, 500);
});

// =====================================
// Intersection Observer for Fade-In Animations
// =====================================
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

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// =====================================
// Scroll Animations for Service Images
// =====================================
const scrollAnimationOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Ne plus observer une fois visible pour optimiser les performances
            scrollObserver.unobserve(entry.target);
        }
    });
}, scrollAnimationOptions);

// Observe all fade-in-left and fade-in-right elements
document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(el => {
    scrollObserver.observe(el);
});

// =====================================
// Scroll Animations for PDV Service Sections
// =====================================
const pdvAnimationOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const pdvScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            pdvScrollObserver.unobserve(entry.target);
        }
    });
}, pdvAnimationOptions);

// Observe all PDV service sections
document.querySelectorAll('.service-section-pdv').forEach(el => {
    pdvScrollObserver.observe(el);
});

// =====================================
// Scroll Animations for New Service Cards
// =====================================
const cardAnimationOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const cardScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in-visible');
            }, index * 100); // Délai échelonné
            cardScrollObserver.unobserve(entry.target);
        }
    });
}, cardAnimationOptions);

// Observe all service card sections
document.querySelectorAll('.service-section-card').forEach((el, index) => {
    // Ajouter classe fade-in pour l'animation
    el.classList.add('fade-in');
    cardScrollObserver.observe(el);
});

// =====================================
// Click to Call and Email (Mobile)
// =====================================
// These are already handled by the href attributes in HTML
// tel: and mailto: links work automatically

// =====================================
// Prevent Default for Empty Hash Links
// =====================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// =====================================
// Animated Statistics Counters (About Page)
// =====================================
const animateCounter = (element, target, hasPlus = false, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (hasPlus ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (hasPlus ? '+' : '');
        }
    };
    
    updateCounter();
};

const statsObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number-about');
            statNumbers.forEach(stat => {
                const targetValue = stat.getAttribute('data-target');
                if (!targetValue) return;
                
                const hasPlus = targetValue.includes('+');
                const target = parseInt(targetValue);
                const currentText = stat.textContent.trim();
                
                // Vérifier si le compteur n'a pas encore été animé
                if (target && (currentText === '0' || currentText === '')) {
                    animateCounter(stat, target, hasPlus);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, statsObserverOptions);

// Observe stats section if it exists
const initStatsObserver = () => {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
};

// Initialiser l'observer quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStatsObserver);
} else {
    // DOM déjà chargé
    initStatsObserver();
}

// =====================================
// Add Active State to Navigation Links
// =====================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
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

// =====================================
// Console Welcome Message
// =====================================
console.log('%c👋 Bienvenue sur le site de SAS Simply Accounts Solutions!', 'font-size: 16px; font-weight: bold; color: #9B5BA5;');
console.log('%cSite développé avec HTML, CSS et JavaScript', 'font-size: 12px; color: #4A5568;');

// =====================================
// Performance Optimization: Lazy Load Images
// =====================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}