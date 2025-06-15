/**
 * Contact Page JavaScript for DeliciousEats
 * Author: Bolt
 * Version: 1.0
 */

// DOM Elements
const contactForm = document.getElementById('contact-form');
const faqToggles = document.querySelectorAll('.faq-toggle');

// Contact form validation and submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Validate form data
    let isValid = true;
    let errorMessage = '';
    
    // Name validation
    if (!formValues.name || formValues.name.trim() === '') {
      isValid = false;
      errorMessage += 'Please enter your name.\n';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email || !emailRegex.test(formValues.email)) {
      isValid = false;
      errorMessage += 'Please enter a valid email address.\n';
    }
    
    // Message validation
    if (!formValues.message || formValues.message.trim() === '') {
      isValid = false;
      errorMessage += 'Please enter your message.\n';
    }
    
    // If form is valid, submit it
    if (isValid) {
      // In a real application, you would send this data to your server
      // For this demo, we'll just show a success message
      
      // Clear the form
      contactForm.reset();
      
      // Show success message
      alert('Thank you for your message! We will get back to you shortly.');
    } else {
      // Show error message
      alert('Please correct the following errors:\n' + errorMessage);
    }
  });
}

// FAQ accordions
if (faqToggles.length > 0) {
  faqToggles.forEach(toggle => {
    const faqItem = toggle.closest('.faq-item');
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const icon = toggle.querySelector('i');
    
    // Initialize styles for smooth transitions
    faqAnswer.style.maxHeight = '0';
    faqAnswer.style.overflow = 'hidden';
    faqAnswer.style.transition = 'max-height 0.3s ease';
    
    toggle.addEventListener('click', () => {
      // Close all other FAQs
      document.querySelectorAll('.faq-answer').forEach(answer => {
        if (answer !== faqAnswer) {
          answer.style.maxHeight = '0';
          const otherIcon = answer.closest('.faq-item').querySelector('.faq-toggle i');
          otherIcon.className = 'fas fa-plus';
        }
      });
      
      // Toggle current FAQ
      if (faqAnswer.style.maxHeight === '0px' || faqAnswer.style.maxHeight === '') {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        icon.className = 'fas fa-minus';
      } else {
        faqAnswer.style.maxHeight = '0';
        icon.className = 'fas fa-plus';
      }
    });
  });
}