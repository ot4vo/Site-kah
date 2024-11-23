const dataInicial = new Date(2024, 6, 26, 1, 53, 30);
let ultimoDia = localStorage.getItem("ultimoDia") ? parseInt(localStorage.getItem("ultimoDia")) : 0; // Recupera o último dia salvo

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicial;

  // Calcula os dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza o contador na página
  document.getElementById('contador').innerHTML =
    `${dias} dias ${horas} horas ${minutos} minutos e ${segundos} segundos`;
  }

contador.style.color = "white";
contador.style.fontSize = "2.3em";
contador.style.fontFamily = "'Keep Calm', sans-serif;";

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

const imagensMoveis = document.querySelectorAll('.imagem-movel');

// Inicializa o movimento para cada imagem
imagensMoveis.forEach(imagem => {
  iniciarMovimentoAleatorio(imagem);
});

function iniciarMovimentoAleatorio(imagem) {
  let posX = Math.random() * (window.innerWidth - 100);
  let posY = Math.random() * (window.innerHeight - 100);
  let velX = (Math.random() * 1.5) + 1; // Velocidade inicial no eixo X
  let velY = (Math.random() * 1.5) + 1; // Velocidade inicial no eixo Y

  function mover() {
    posX += velX;
    posY += velY;

    // Verifica colisão com as bordas da tela e inverte a direção se necessário
    if (posX <= 0 || posX >= window.innerWidth - 100) velX *= -1;
    if (posY <= 0 || posY >= window.innerHeight - 100) velY *= -1;

    imagem.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(mover);
  }

  mover();
}

fetch('flower/index.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const conteudo = doc.querySelector('body').innerHTML; // Aqui você pode selecionar partes específicas
    document.getElementById('flower').innerHTML = conteudo;
  })
  .catch(error => console.log('Erro ao carregar o conteúdo:', error));

 function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function soltarConfetes() {
  const numConfetes = 1;

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
  origin: { 
    x: event.clientX / window.innerWidth, // Posição X do clique
    y: event.clientY / window.innerHeight}
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle'],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);}

document.body.addEventListener('click', soltarConfetes);

