    const diasEl = document.getElementById("dias");
    const horasEl = document.getElementById("horas");
    const minutosEl = document.getElementById("minutos");
    const segundosEl = document.getElementById("segundos");

    const anoNovo = `1 Jan ${new Date().getFullYear() + 1}`;

    function contadorRegressivo() {
        const dataAnoNovo = new Date(anoNovo);
        const dataAtual = new Date();

        const totalSegundos = (dataAnoNovo - dataAtual) / 1000;

        const dias = Math.floor(totalSegundos/ 3600 / 24);
        const horas = Math.floor(totalSegundos / 3600) % 24;
        const minutos = Math.floor(totalSegundos / 60) % 60;
        const segundos = Math.floor(totalSegundos) % 60;

        diasEl.innerHTML = dias;
        horasEl.innerHTML = formatarTempo(horas);
        minutosEl.innerHTML = formatarTempo(minutos);
        segundosEl.innerHTML = formatarTempo(segundos);
    }

    function formatarTempo(tempo) {
        return tempo < 10 ? `0${tempo}` : tempo;
    }

    contadorRegressivo();

    setInterval(contadorRegressivo, 1000);
    
