document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  // Abre ou fecha
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
  });

  // Fecha a sidebar
  sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('open'); // Remove a classe "open"
  });

  const dropdowns = document.querySelectorAll('.sidebar .dropdown');

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('button');
    button.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });
  });
});