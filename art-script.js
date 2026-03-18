(function () {
  'use strict';

  const pieces = document.querySelectorAll('.art-piece');
  const indexLinks = document.querySelectorAll('.index-link');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarLeft = document.getElementById('sidebarLeft');

  // --- Scroll Reveal ---
  if (pieces.length) {
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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    pieces.forEach((piece, i) => {
      piece.dataset.revealDelay = String(i * 80);
      revealObserver.observe(piece);
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

    pieces.forEach((piece) => scrollObserver.observe(piece));
  }

  // --- Smooth Scroll for Index Links ---
  indexLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Lightbox ---
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img src="" alt="" /><button class="lightbox-close">Close</button>';
  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector('img');
  const lightboxClose = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.art-frame img').forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeLightbox();
    }
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
