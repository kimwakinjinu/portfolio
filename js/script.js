
// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simulate form submission
      submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin me-2"></i> Processing...';
      submitBtn.disabled = true;
      
      // Simulate API call with setTimeout
      setTimeout(function() {
        // Show success message
        formMessage.classList.add('alert', 'alert-success');
        formMessage.innerHTML = 'Message sent successfully! I\'ll get back to you soon.';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Send Message';
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(function() {
          formMessage.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated:not(.animate__infinite)');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (elementPosition.top < windowHeight - 50) {
        // Add visible class or restart animation
        if (element.style.visibility === 'hidden') {
          element.style.visibility = 'visible';
          
          // Get animation classes
          const classes = element.className.split(' ').filter(c => c.startsWith('animate__'));
          
          // Remove and re-add animation classes to restart
          classes.forEach(c => {
            element.classList.remove(c);
            void element.offsetWidth; // Trigger reflow
            element.classList.add(c);
          });
        }
      } else {
        // Hide elements above viewport
        element.style.visibility = 'hidden';
      }
    });
  }
  
  // Run on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(10, 14, 23, 0.95)';
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backgroundColor = 'rgba(10, 14, 23, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});
