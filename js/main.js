
// Main JavaScript file for Calif Bites website

document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Navbar functionality
  const header = document.querySelector('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navClose = document.querySelector('.nav-close');
  const navItems = document.querySelectorAll('.nav-link');

  // Add refined scroll behavior for navbar with smoother transition
  window.addEventListener('scroll', function() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
      header.classList.add('bg-white/95');
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('bg-white/95');
      header.classList.remove('shadow-sm');
    }
  });

  // Mobile menu toggle with smoother animation
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (navClose) {
    navClose.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close mobile menu when clicking on a link
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Testimonial slider with improved fade effect
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  let currentTestimonial = 0;

  // Initialize testimonials
  if (testimonials.length > 0) {
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = 'none';
        testimonial.style.opacity = '0';
      } else {
        testimonial.style.opacity = '1';
      }
    });

    // Function to show testimonial with fade effect
    const showTestimonial = (index) => {
      // Hide current testimonial
      testimonials[currentTestimonial].style.opacity = '0';
      setTimeout(() => {
        testimonials[currentTestimonial].style.display = 'none';
        
        // Show new testimonial
        currentTestimonial = index;
        testimonials[currentTestimonial].style.display = 'block';
        setTimeout(() => {
          testimonials[currentTestimonial].style.opacity = '1';
        }, 50);
      }, 300);
    };

    // Previous testimonial
    if (prevButton) {
      prevButton.addEventListener('click', function() {
        const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
      });
    }

    // Next testimonial
    if (nextButton) {
      nextButton.addEventListener('click', function() {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
      });
    }

    // Auto-advance testimonials every 7 seconds
    const autoAdvance = setInterval(() => {
      const nextIndex = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(nextIndex);
    }, 7000);

    // Pause auto-advance when hovering over testimonials
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
      testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
      });
    }
  }

  // Enhanced animation on scroll with subtle fade-in and slide-up effects
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 60) {
        // Add a slight delay based on element index for staggered animations
        setTimeout(() => {
          element.classList.add('animated');
        }, index * 100); // 100ms delay between each element
      }
    });
  }

  // Initial check for elements in view
  animateOnScroll();
  
  // Add scroll event for animation
  window.addEventListener('scroll', animateOnScroll);

  // Smooth scroll for anchor links with refined timing
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Determine the offset dynamically based on header height
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form validation with subtle feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const formInputs = this.querySelectorAll('.form-control');
      
      formInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          
          input.addEventListener('input', function() {
            if (this.value.trim()) {
              this.classList.remove('error');
            }
          });
        }
      });
      
      if (isValid) {
        // Normally we would submit the form here
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission
        setTimeout(() => {
          this.reset();
          submitBtn.textContent = 'Message Sent!';
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        }, 1500);
      }
    });
  }
  
  // Add image error handling for all images on the site
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      console.log('Image failed to load:', this.src);
      this.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80'; // Fallback image
    });
  });
});
