document.addEventListener('DOMContentLoaded', () => {
  const yearTarget = document.querySelector('[data-year]');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href').slice(1);
      const section = document.getElementById(targetId);
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const galleryTriggers = document.querySelectorAll('[data-gallery-trigger]');
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImg = document.querySelector('[data-lightbox-image]');
  const lightboxCaption = document.querySelector('[data-lightbox-caption]');
  const closeBtn = document.querySelector('[data-lightbox-close]');

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open');
    if (lightboxImg) {
      lightboxImg.src = '';
      lightboxImg.alt = '';
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = '';
    }
  };

  if (galleryTriggers.length && lightbox && lightboxImg && lightboxCaption) {
    galleryTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const fullSrc = trigger.getAttribute('data-full');
        const altText = trigger.getAttribute('aria-label') || '';
        lightboxImg.src = fullSrc;
        lightboxImg.alt = altText;
        lightboxCaption.textContent = altText;
        lightbox.classList.add('active');
        document.body.classList.add('lightbox-open');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  const navToggle = document.querySelector('[data-nav-toggle]');
  const navPanel = document.querySelector('[data-nav-panel]');

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (navToggle && navPanel) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navPanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        if (!document.body.classList.contains('nav-open')) {
          return;
        }

        const href = link.getAttribute('href');

        if (!href || href.startsWith('#')) {
          closeNav();
          return;
        }

        event.preventDefault();
        closeNav();
        setTimeout(() => {
          window.location.href = href;
        }, 220);
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        closeNav();
      }
    });

    document.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        closeNav();
      }
    });
  }

  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dots = carousel.querySelectorAll('.dot');

    let currentSlide = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
      const offset = -currentSlide * 100;
      track.style.transform = `translateX(${offset}%)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    };

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-slide'), 10);
        updateCarousel();
      });
    });

    // Auto-advance carousel every 6 seconds
    setInterval(nextSlide, 6000);
  }
});
