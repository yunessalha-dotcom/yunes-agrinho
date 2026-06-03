const dinossauros = {
    "t-rex": {
        nome: "Tyrannosaurus Rex",
        imagem: "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?w=800",
        audio: "sons/t-rex.mp3",
        descricao: "O Tiranossauro Rex foi um dos maiores carnívoros terrestres de todos os tempos. Viveu no final do período Cretáceo e era conhecido por sua mordida extremamente poderosa, capaz de quebrar ossos, e dentes serrilhados altamente eficientes para caça.",
        stats: [
            "Período: Cretáceo Superior",
            "Dieta: Carnívoro",
            "Tamanho: Até 12 metros"
        ]
    },
    "triceratops": {
        nome: "Triceratops",
        imagem: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
        audio: "sons/triceratops.mp3",
        descricao: "O Triceratops é facilmente reconhecido pelos seus três chifres marcantes e o grande folho ósseo protetor na parte de trás da cabeça. Ele era um herbívoro robusto e pesado que viveu nos mesmos ecossistemas que o temido T-Rex.",
        stats: [
            "Período: Cretáceo Superior",
            "Dieta: Herbívoro",
            "Tamanho: Cerca de 9 metros"
        ]
    },
    "velociraptor": {
        nome: "Velociraptor",
        imagem: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800",
        audio: "sons/velociraptor.mp3",
        descricao: "Apesar de ser menor do que o retratado nos cinemas, o Velociraptor era um caçador formidável. Era extremamente ágil, veloz e inteligente, utilizando uma garra retrátil em formato de foice em suas patas para capturar presas.",
        stats: [
            "Período: Cretáceo Superior",
            "Dieta: Carnívoro",
            "Tamanho: Cerca de 2 metros"
        ]
    }
};

const botoesNav = document.querySelectorAll('.nav-btn');
const elementoTitulo = document.getElementById('dino-title');
const elementoImg = document.getElementById('dino-img');
const elementoAudio = document.getElementById('dino-audio');
const elementoDesc = document.getElementById('dino-desc');
const elementoStats = document.getElementById('dino-stats');
const botaoSom = document.getElementById('play-sound-btn');

// Troca as informações na tela
function atualizarDino(idDino) {
    const dino = dinossauros[idDino];

    if (dino) {
        elementoTitulo.textContent = dino.nome;
        elementoImg.src = dino.imagem;
        elementoImg.alt = dino.nome;
        elementoAudio.src = dino.audio;
        elementoDesc.textContent = dino.descricao;

        // Limpa e reconstrói a ficha técnica
        elementoStats.innerHTML = '';
        dino.stats.forEach(stat => {
            const li = document.createElement('li');
            const partes = stat.split(':');
            li.innerHTML = `<strong>${partes[0]}:</strong>${partes[1]}`;
            elementoStats.appendChild(li);
        });
    }
}

botoesNav.forEach(botao => {
    botao.addEventListener('click', (e) => {
        botoesNav.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const idDino = e.target.getAttribute('data-dino');
        atualizarDino(idDino);
    });
});

botaoSom.addEventListener('click', () => {
    elementoAudio.currentTime = 0;
    elementoAudio.play().catch(err => {
        console.warn("Áudio não encontrado. Adicione arquivos .mp3 na pasta 'sons/' para escutar o rugido.");
    });
});
