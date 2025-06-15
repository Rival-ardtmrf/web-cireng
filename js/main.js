/**
 * Main JavaScript for DeliciousEats
 * Author: Bolt
 * Version: 1.0
 */

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const faqItems = document.querySelectorAll('.faq-item');

// Handle mobile menu toggle
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    
    // Transform hamburger into X
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenuBtn.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Run on initial load

// Add mobile navigation
if (nav) {
  // Add mobile nav styles
  const style = document.createElement('style');
  style.textContent = `
    .nav.active {
      display: block;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: var(--neutral-100);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 16px;
    }
    
    .nav.active .nav-list {
      flex-direction: column;
      align-items: center;
    }
    
    .nav.active .nav-list li {
      margin-bottom: 16px;
    }
    
    .mobile-menu-btn.active span {
      margin-left: auto;
    }
    
    @media (min-width: 769px) {
      .nav {
        display: block !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// FAQ Accordion
if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('.faq-toggle i');
    
    // Hide all answers initially
    answer.style.display = 'none';
    
    question.addEventListener('click', () => {
      // Toggle current item
      const isOpen = answer.style.display === 'block';
      
      // Toggle icon
      icon.className = isOpen ? 'fas fa-plus' : 'fas fa-minus';
      
      // Toggle answer with smooth animation
      if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        setTimeout(() => {
          answer.style.maxHeight = '0';
          setTimeout(() => {
            answer.style.display = 'none';
          }, 300);
        }, 10);
      } else {
        answer.style.display = 'block';
        answer.style.maxHeight = '0';
        setTimeout(() => {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }, 10);
      }
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (nav.classList.contains('active')) {
        mobileMenuBtn.click();
      }
    }
  });
});