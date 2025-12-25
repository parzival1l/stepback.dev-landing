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
  // ===========================
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

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ===========================
  // Navigation scroll effect
  // ===========================
  const nav = document.getElementById('nav');

  if (nav) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
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
  });

})();
