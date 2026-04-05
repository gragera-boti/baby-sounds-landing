document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      
      // Prevent scrolling when mobile menu is open
      if (!isExpanded) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        body.style.overflow = '';
      });
    });
  }

  // Navbar background change on scroll
  const nav = document.querySelector('.nav');
  
  if (nav) {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    // Call once on load to handle initial state if user loaded halfway down page
    checkScroll();
  }
});
