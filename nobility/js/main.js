/* ============================================================
   MAIN.JS — Comportamentos interativos da Nobility Estamparia
   ============================================================ */

'use strict';

/* ── 1. MENU MOBILE ──────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav    = document.querySelector('.header__nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    toggle.setAttribute('aria-expanded', aberto);
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('aberto'));
  });
})();


/* ── 2. FADE-UP AO ROLAR (IntersectionObserver) ─────────── */
(function () {
  const elementos = document.querySelectorAll('.fade-up');
  if (!elementos.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visivel');
          observer.unobserve(entry.target); // Anima só uma vez
        }
      });
    },
    { threshold: 0.15 }
  );

  elementos.forEach(el => observer.observe(el));
})();


/* ── 3. HEADER COMPACTO AO ROLAR ─────────────────────────── */
(function () {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--compacto', window.scrollY > 60);
  }, { passive: true });
})();


/* ── 4. NAVEGAÇÃO ATIVA (highlight do link atual) ────────── */
(function () {
  const secoes = document.querySelectorAll('section[id]');
  const links  = document.querySelectorAll('.header__nav a[href^="#"]');
  if (!secoes.length || !links.length) return;

  const marcarAtivo = () => {
    let atual = '';
    secoes.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) atual = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('ativo', link.getAttribute('href') === `#${atual}`);
    });
  };

  window.addEventListener('scroll', marcarAtivo, { passive: true });
})();


/* ── 5. IMAGEM COM FALLBACK (placeholder emoji) ──────────── */
(function () {
  document.querySelectorAll('.card__img-wrapper img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const placeholder = img.nextElementSibling;
      if (placeholder) placeholder.style.display = 'flex';
    });
  });
})();
