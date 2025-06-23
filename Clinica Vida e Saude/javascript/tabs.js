// Controle de abas informativas
document.querySelectorAll('.tab-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
  
      // Ativa o botão
      document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // Exibe painel correspondente
      document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Inicializa abas
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-buttons button.active').click();
  });