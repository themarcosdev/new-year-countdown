// as const com El se referem as que vou pegar usando .getElementById
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const anoNovo = "1 Jan 2024";

//definindo uma função para def dias,hs,min e seg.
function contadorRegressivo() {
    const dataAnoNovo = new Date(anoNovo);
    const dataAtual = new Date();

    const totalSegundos = (dataAnoNovo - dataAtual) / 1000;

    const dias = Math.floor(totalSegundos/ 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    //declarando que as varEl irão receber um novo valor via innerHTML
    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatarTempo(horas);
    minutosEl.innerHTML = formatarTempo(minutos);
    segundosEl.innerHTML = formatarTempo(segundos);
}

// formatando o tempo
function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

// chamada inicial do contador e def intervalo.
  contadorRegressivo();

  setInterval(contadorRegressivo, 1000);
