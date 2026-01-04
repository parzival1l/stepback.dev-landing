/**
 * stepback.dev - Main JavaScript
 * Handles animations, scroll effects, and interactions
 */

(function() {
  'use strict';

  // ===========================
  // Smooth scroll for anchor links
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===========================
  // Intersection Observer for scroll animations
  // (Fallback for browsers without scroll-timeline support)
  // ===========================
  const supportsScrollTimeline = CSS.supports('animation-timeline', 'scroll()');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Only use JS-based animations if CSS scroll-timeline isn't supported
  if (!supportsScrollTimeline) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // ===========================
  // Navigation scroll effect
  // ===========================
  const nav = document.getElementById('nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // ===========================
  // Mobile menu toggle
  // ===========================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }

  // ===========================
  // CTA click tracking (stub for analytics)
  // ===========================
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const location = btn.dataset.location || 'unknown';
      console.log('CTA clicked:', location);

      // Uncomment when analytics is set up:
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'cta_click', { 'button_location': location });
      // }
    });
  });

  // ===========================
  // Scroll depth tracking (stub for analytics)
  // ===========================
  let maxScroll = 0;
  const milestones = [25, 50, 75, 100];
  const reachedMilestones = new Set();

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;

      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !reachedMilestones.has(milestone)) {
          reachedMilestones.add(milestone);
          console.log('Scroll depth:', milestone + '%');

          // Uncomment when analytics is set up:
          // if (typeof gtag !== 'undefined') {
          //   gtag('event', 'scroll_depth', { 'percent': milestone });
          // }
        }
      });
    }
  });

  // ===========================
  // Email Signup Form Handler
  // ===========================

  // CONFIGURATION: Change this to your backend endpoint
  const SIGNUP_ENDPOINT = '/api/signup'; // Your FastAPI endpoint

  const signupForm = document.getElementById('signup-form');

  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('signup-email');
      const submitBtn = signupForm.querySelector('button[type="submit"]');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      const btnArrow = submitBtn.querySelector('.btn-arrow');
      const messageEl = document.getElementById('form-message');

      const email = emailInput.value.trim();

      if (!email) {
        showMessage(messageEl, 'Please enter your email address.', 'error');
        return;
      }

      // Show loading state
      btnText.style.display = 'none';
      btnArrow.style.display = 'none';
      btnLoading.style.display = 'inline';
      submitBtn.disabled = true;
      emailInput.disabled = true;

      try {
        const response = await fetch(SIGNUP_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          showMessage(messageEl, "You're on the list! We'll be in touch soon.", 'success');
          emailInput.value = '';

          // Track signup (analytics stub)
          console.log('Signup success:', email);
          // if (typeof gtag !== 'undefined') {
          //   gtag('event', 'signup', { 'method': 'email' });
          // }
        } else {
          showMessage(messageEl, data.message || 'Something went wrong. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Signup error:', error);

        // For demo/development: show success anyway if endpoint doesn't exist
        // Remove this block in production
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          showMessage(messageEl, "You're on the list! We'll be in touch soon.", 'success');
          emailInput.value = '';
          console.log('Demo mode - Email captured:', email);
        } else {
          showMessage(messageEl, 'Connection error. Please try again later.', 'error');
        }
      } finally {
        // Reset button state
        btnText.style.display = 'inline';
        btnArrow.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        emailInput.disabled = false;
      }
    });
  }

  function showMessage(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.className = 'form-message ' + type;
  }

  // ===========================
  // Initialize on DOM ready
  // ===========================
  document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class for any initial animations
    document.body.classList.add('loaded');

    // Initialize tree particles
    initTreeParticles();

    // Initialize card hover glow tracking
    initCardGlowTracking();

    // Initialize page transitions
    initPageTransitions();
  });

  // ===========================
  // Branch Tree Initialization
  // ===========================
  function initTreeParticles() {
    // Particles are now handled via SVG animateMotion
    // This function is kept for compatibility but no longer creates HTML particles
    const tree = document.getElementById('branchTree');
    if (!tree) return;

    // Tree is fully SVG-based now, animations handled in CSS/SVG
  }

  // ===========================
  // Card Glow Effect (Mouse Tracking)
  // ===========================
  function initCardGlowTracking() {
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }

  // ===========================
  // Page Transitions
  // ===========================
  function initPageTransitions() {
    // Check if View Transitions API is supported
    const supportsViewTransitions = 'startViewTransition' in document;

    // Handle internal link clicks
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');

      // Skip external links, anchors, and special protocols
      if (!href ||
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('http') ||
          link.target === '_blank') {
        return;
      }

      link.addEventListener('click', (e) => {
        e.preventDefault();

        if (supportsViewTransitions) {
          // Use View Transitions API
          document.startViewTransition(() => {
            window.location.href = href;
          });
        } else {
          // Fallback: Add transition class, then navigate
          document.body.classList.add('page-transitioning');

          setTimeout(() => {
            window.location.href = href;
          }, 300);
        }
      });
    });
  }

  // ===========================
  // Hero Parallax Effect (Scroll-based)
  // ===========================
  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const heroVisual = document.querySelector('.hero-visual');
    const heroBg = document.querySelector('.hero-bg');

    if (heroVisual && scrollY < window.innerHeight) {
      // Subtle parallax on the tree
      const parallaxAmount = scrollY * 0.15;
      heroVisual.style.transform = `translateY(${parallaxAmount}px)`;
    }

    if (heroBg && scrollY < window.innerHeight) {
      // Move gradients slightly on scroll
      const gradients = heroBg.querySelectorAll('.hero-gradient');
      gradients.forEach((gradient, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const amount = scrollY * 0.08 * direction;
        gradient.style.transform = `translate(${amount}px, ${amount * 0.5}px)`;
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // ===========================
  // SVG Node Interactions
  // ===========================
  function initNodeInteractions() {
    const nodes = document.querySelectorAll('.tree-node');

    nodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const nodeName = node.dataset.node;
        highlightBranchPath(nodeName);
      });

      node.addEventListener('mouseleave', () => {
        resetBranchPaths();
      });
    });
  }

  function highlightBranchPath(nodeName) {
    const nodePathMap = {
      // Main branch nodes (vertical trunk)
      'init': ['main'],
      'main-2': ['main'],
      'main-3': ['main', 'explore'],
      'main-4': ['main'],
      'main-5': ['main'],
      'main-6': ['main', 'tangent'],
      'main-7': ['main'],
      'merge-point': ['main', 'merge'],
      'main-9': ['main'],
      'main-end': ['main'],
      // Explore branch nodes (branches RIGHT at y=105)
      'explore-1': ['explore'],
      'explore-2': ['explore', 'debug'],
      'explore-3': ['explore'],
      // Tangent branch nodes (branches LEFT at y=225)
      'tangent-1': ['tangent'],
      'tangent-2': ['tangent'],
      'tangent-3': ['tangent', 'merge'],
      // Debug branch nodes (branches from explore)
      'debug-1': ['debug'],
      'debug-2': ['debug']
    };

    const connectedPaths = nodePathMap[nodeName] || [];

    document.querySelectorAll('.branch-path').forEach(path => {
      const branchName = path.dataset.branch;
      if (connectedPaths.includes(branchName)) {
        path.style.strokeWidth = (parseFloat(path.getAttribute('stroke-width')) + 1) + '';
        path.style.opacity = '1';
      } else {
        path.style.opacity = '0.2';
      }
    });
  }

  function resetBranchPaths() {
    document.querySelectorAll('.branch-path').forEach(path => {
      path.style.strokeWidth = '';
      path.style.opacity = '';
    });
  }

  // Initialize node interactions after DOM is ready
  document.addEventListener('DOMContentLoaded', initNodeInteractions);

})();
