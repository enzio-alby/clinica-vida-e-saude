// VLibras
if (typeof window.VLibras === "undefined") {
  const script = document.createElement('script');
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
  script.onload = function() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };
  document.body.appendChild(script);
} else {
  new window.VLibras.Widget('https://vlibras.gov.br/app');
}

// Contraste
window.toggleContrast = function() {
  document.body.classList.toggle('high-contrast');
};

// Fonte maior
window.increaseFont = function() {
  document.body.classList.add('larger-text');
};

// Fonte normal
window.decreaseFont = function() {
  document.body.classList.remove('larger-text');
};

// Menu visão
window.toggleVisionMenu = function() {
  const menu = document.getElementById("visionMenu");
  if (menu) {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
};

// Acessibilidade auditiva
window.audioAccessibility = false;
window.toggleAudioAccessibility = function() {
  window.audioAccessibility = !window.audioAccessibility;
  window.speakText(window.audioAccessibility
    ? 'Modo auditivo ativado. Passe o mouse sobre os textos para ouvir.'
    : 'Modo auditivo desativado.'
  );
};

window.speakText = function(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
};

document.addEventListener('mouseover', function (e) {
  if (window.audioAccessibility && e.target) {
    const tag = e.target.tagName.toLowerCase();
    if (['label', 'button', 'h2', 'a', 'p'].includes(tag)) {
      const text = e.target.textContent.trim();
      if (text) window.speakText(text);
    }
  }
});