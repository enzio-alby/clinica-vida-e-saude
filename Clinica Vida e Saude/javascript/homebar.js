document.addEventListener('DOMContentLoaded', () => {
  // Fale Conosco da homebar
  const faleConoscoButton = document.querySelector('.header-nav button i.fa-envelope, .header-nav a i.fa-envelope');
  if (faleConoscoButton) {
    faleConoscoButton.parentElement.addEventListener('click', () => {
      const mensagem = document.getElementById('mensagem-flutuante');
      mensagem.style.display = 'block';
      setTimeout(() => {
        mensagem.style.display = 'none';
      }, 5000);
    });
  }

  // Fale Conosco da sidebar
  const faleConoscoSidebar = document.querySelector('.sidebar a[href="#contato"], .sidebar button i.fa-envelope');
  if (faleConoscoSidebar) {
    // Se for <a>
    if (faleConoscoSidebar.tagName === 'A') {
      faleConoscoSidebar.addEventListener('click', (e) => {
        e.preventDefault();
        const mensagem = document.getElementById('mensagem-flutuante');
        mensagem.style.display = 'block';
        setTimeout(() => {
          mensagem.style.display = 'none';
        }, 5000);
      });
    } else if (faleConoscoSidebar.parentElement) {
      // Se for <button>
      faleConoscoSidebar.parentElement.addEventListener('click', (e) => {
        e.preventDefault();
        const mensagem = document.getElementById('mensagem-flutuante');
        mensagem.style.display = 'block';
        setTimeout(() => {
          mensagem.style.display = 'none';
        }, 5000);
      });
    }
  }

  const headerNav = document.querySelector('.header-nav');
  const hamburger = document.getElementById('menu-toggle');

  function updateMenuOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 80) {
      headerNav.style.display = 'none';
      hamburger.style.display = 'flex';
    } else {
      headerNav.style.display = '';
      if (window.innerWidth <= 900) {
        hamburger.style.display = 'flex';
      } else {
        hamburger.style.display = 'none';
      }
    }
  }

  updateMenuOnScroll();
  window.addEventListener('scroll', updateMenuOnScroll);
  window.addEventListener('resize', updateMenuOnScroll);
});