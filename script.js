(function () {
  'use strict';

  const entries = document.querySelectorAll('.entry');
  const indexLinks = document.querySelectorAll('.index-link');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarLeft = document.getElementById('sidebarLeft');

  // --- Scroll Reveal ---
  const revealObserver = new IntersectionObserver(
    (observed) => {
      observed.forEach((item) => {
        if (item.isIntersecting) {
          const delay = parseInt(item.target.dataset.revealDelay || '0', 10);
          setTimeout(() => item.target.classList.add('visible'), delay);
          revealObserver.unobserve(item.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  entries.forEach((entry, i) => {
    entry.dataset.revealDelay = String(i * 50);
    revealObserver.observe(entry);
  });

  // --- Index Highlight on Scroll ---
  const scrollObserver = new IntersectionObserver(
    (observed) => {
      observed.forEach((item) => {
        const id = item.target.id;
        const link = document.querySelector('.index-link[href="#' + id + '"]');
        if (link) {
          link.classList.toggle('active', item.isIntersecting);
        }
      });
    },
    { threshold: 0.35 }
  );

  entries.forEach((entry) => scrollObserver.observe(entry));

  // --- Smooth Scroll for Index Links ---
  indexLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // --- Mobile Menu ---
  function closeMobileMenu() {
    if (sidebarLeft) sidebarLeft.classList.remove('open');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
  }

  if (mobileMenuBtn && sidebarLeft) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = sidebarLeft.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (
        sidebarLeft.classList.contains('open') &&
        !sidebarLeft.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebarLeft.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }
})();
