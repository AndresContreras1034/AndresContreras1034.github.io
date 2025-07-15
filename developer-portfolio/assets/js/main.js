
// Suavizar el scroll al hacer clic en los enlaces del menú
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Ejemplo de animación simple al cargar la página
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(30px)';
  setTimeout(() => {
    hero.style.transition = 'all 1s ease';
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 100);
});
