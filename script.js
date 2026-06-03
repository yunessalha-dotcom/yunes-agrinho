const dinossauros = {
    "t-rex": {
        nome: "Tyrannosaurus Rex",
        imagem: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600",
        audio: "sons/t-rex.mp3", // Certifique-se de ter essa pasta e arquivo no seu projeto
        descricao: "O Tiranossauro Rex foi um dos maiores carnívoros terrestres de todos os tempos. Viveu no final do período Cretáceo e era conhecido por sua mordida extremamente poderosa e dentes serrilhados altamente eficientes para caça.",
        stats: [
            "Período: Cretáceo Superior",
            "Dieta: Carnívoro",
            "Tamanho: Até 12 metros de comprimento"
        ]
    },
    "triceratops": {
        nome: "Triceratops",
        imagem: "https://images.unsplash.com/photo-1559863345-02efa691b662?w=600",
        audio: "sons/triceratops.mp3",
        descricao: "O Triceratops é facilmente reconhecido pelos seus três chifres e o grande folho ósseo na parte de trás da cabeça. Ele era um herbívoro robusto que viveu no mesmo período e ambiente que o temido T-Rex.",
        stats: [
            "Período: Cretáceo Superior",
            "Dieta: Herbívoro",
            "Tamanho: Cerca de 9 metros de comprimento"
        ]
    },
    "velociraptor": {
        nome: "Velociraptor",
        imagem: "https://images.unsplash.com/photo-1606856571953-e34988f2f61e?w=600",
        audio: "sons/velociraptor.mp3",
        descricao: "Apesar de ser menor do que o retratado nos cinemas, o Velociraptor era um predador extremamente ágil, veloz e inteligente. Evidências fósseis recentes indicam que ele possuía o corpo coberto por penas.",
        stats: [
            "Período: Cretáceo Superior",
            "Dieta: Carnívoro",
            "Tamanho: Cerca de 2 metros de comprimento"
        ]
    }
};

// Seleção de elementos da página
const botoesNav = document.querySelectorAll('.nav-btn');
const elementoTitulo = document.getElementById('dino-title');
const elementoImg = document.getElementById('dino-img');
const elementoAudio = document.getElementById('dino-audio');
const elementoDesc = document.getElementById('dino-desc');
const elementoStats = document.getElementById('dino-stats');
const botaoSom = document.getElementById('play-sound-btn');

// Função para atualizar o conteúdo da Wiki
function atualizarDino(idDino) {
    const dino = dinossauros[idDino];

    if (dino) {
        elementoTitulo.textContent = dino.nome;
        elementoImg.src = dino.imagem;
        elementoImg.alt = dino.nome;
        elementoAudio.src = dino.audio;
        elementoDesc.textContent = dino.descricao;

        // Atualiza a lista de ficha técnica
        elementoStats.innerHTML = '';
        dino.stats.forEach(stat => {
            const li = document.createElement('li');
            // Divide o texto no primeiro ":" para negritar a categoria
            const partes = stat.split(':');
            li.innerHTML = `<strong>${partes[0]}:</strong>${partes[1]}`;
            elementoStats.appendChild(li);
        });
    }
}

// Evento de clique para os botões do menu lateral
botoesNav.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Remove classe ativa de todos e adiciona no clicado
        botoesNav.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // Pega o id do dinossauro do atributo data-dino
        const idDino = e.target.getAttribute('data-dino');
        atualizarDino(idDino);
    });
});

// Evento para tocar o som do dinossauro
botaoSom.addEventListener('click', () => {
    elementoAudio.currentTime = 0; // Reinicia o áudio caso já esteja tocando
    elementoAudio.play().catch(error => {
        console.log("Para reproduzir som, certifique-se de que o arquivo de áudio existe no caminho especificado.");
    });
});
