const dataInicial = new Date(2024, 7, 26, 1, 53, 30);

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicial;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('contador').innerHTML = 
    `${dias} dias ${horas} horas ${minutos} minutos e ${segundos} segundos`;
}

contador.style.color = "white";
contador.style.fontSize = "2.3em";
contador.style.fontFamily = "Keep calm";

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
