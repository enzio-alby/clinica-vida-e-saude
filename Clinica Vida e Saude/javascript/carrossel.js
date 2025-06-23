// carrossel.js - Carrossel

const faixa = document.querySelector('.faixa-carrossel');
const slidesOriginais = Array.from(faixa.children);
const botaoProximo = document.querySelector('.botao-carrossel.proximo');
const botaoAnterior = document.querySelector('.botao-carrossel.anterior');
let indiceAtual = 1; // Começa no primeiro slide real (após o clone)
let intervaloCarrossel = null;

// Clona os slide
const primeiroClone = slidesOriginais[0].cloneNode(true);
const ultimoClone = slidesOriginais[slidesOriginais.length - 1].cloneNode(true);

// Adiciona clones
faixa.insertBefore(ultimoClone, slidesOriginais[0]);
faixa.appendChild(primeiroClone);

const slides = Array.from(faixa.children);

function atualizarCarrossel(transicao = true) {
  const larguraSlide = slides[0].getBoundingClientRect().width;
  if (!transicao) faixa.style.transition = 'none';
  else faixa.style.transition = 'transform 0.5s ease-in-out';
  faixa.style.transform = `translateX(-${indiceAtual * larguraSlide}px)`;
}

// Avança o slide
function proximoSlide() {
  if (indiceAtual >= slides.length - 1) return;
  indiceAtual++;
  atualizarCarrossel();
}

// Volta o slide
function anteriorSlide() {
  if (indiceAtual <= 0) return;
  indiceAtual--;
  atualizarCarrossel();
}

// Inicia o carrossel 
function iniciarCarrosselAutomatico() {
  intervaloCarrossel = setInterval(proximoSlide, 4000); // Troca a cada 4 segundos
}

// Para o carrossel
function pausarCarrosselAutomatico() {
  clearInterval(intervaloCarrossel);
}

// Ajusta a transição
faixa.addEventListener('transitionend', () => {
  if (slides[indiceAtual] === primeiroClone) {
    indiceAtual = 1;
    atualizarCarrossel(false);
  }
  if (slides[indiceAtual] === ultimoClone) {
    indiceAtual = slides.length - 2;
    atualizarCarrossel(false);
  }
});

// Eventos dos botões
botaoProximo.addEventListener('click', () => {
  proximoSlide();
  pausarCarrosselAutomatico();
  iniciarCarrosselAutomatico();
});

botaoAnterior.addEventListener('click', () => {
  anteriorSlide();
  pausarCarrosselAutomatico();
  iniciarCarrosselAutomatico();
});

// Atualiza ao redimensionar
window.addEventListener('resize', () => atualizarCarrossel(false));

// Inicia o carrossel automático
atualizarCarrossel(false);
iniciarCarrosselAutomatico();