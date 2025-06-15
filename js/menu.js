/**
 * Menu Page JavaScript for DeliciousEats
 * Author: Bolt
 * Version: 1.0
 */

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menuCategories = document.querySelectorAll('.menu-category');

// Initialize the menu filter functionality
function initMenuFilter() {
  // Show all items by default
  showCategory('all');
  
  // Add click event to category buttons
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get category to show
      const category = button.getAttribute('data-category');
      
      // Show selected category
      showCategory(category);
    });
  });
}

// Function to show items from a specific category
function showCategory(category) {
  if (category === 'all') {
    // Show all categories
    menuCategories.forEach(menuCategory => {
      menuCategory.style.display = 'block';
    });
  } else {
    // Hide all categories first
    menuCategories.forEach(menuCategory => {
      menuCategory.style.display = 'none';
    });
    
    // Show only the selected category
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
      selectedCategory.style.display = 'block';
    }
  }
  
  // Add animation to newly visible items
  const visibleItems = document.querySelectorAll('.menu-item:not([style*="display: none"])');
  visibleItems.forEach((item, index) => {
    item.classList.remove('fade-in', 'delay-1', 'delay-2', 'delay-3');
    void item.offsetWidth; // Trigger reflow
    
    item.classList.add('fade-in');
    if (index % 4 === 1) item.classList.add('delay-1');
    if (index % 4 === 2) item.classList.add('delay-2');
    if (index % 4 === 3) item.classList.add('delay-3');
  });
}

// Initialize the menu when the DOM is loaded
document.addEventListener('DOMContentLoaded', initMenuFilter);