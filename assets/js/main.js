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
});
