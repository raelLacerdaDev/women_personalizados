const cardsDestaque = document.querySelectorAll(".card-interativo");
const mensagemDestaque = document.querySelector("#mensagem-destaque");

const mensagemOriginal = "🌿 Toque em um dos itens abaixo para descobrir os detalhes de costura e personalização do ateliê!";
let produtoAtual = null;

function resetarMensagem() {
    mensagemDestaque.textContent = mensagemOriginal;
    produtoAtual = null;
}

function mostrarMensagem(produto) {
    if (produto === "maternal") {
        mensagemDestaque.textContent = "Segredo de Ateliê: No Kit Maternal, podemos bordar o nome do bebê em fonte clássica e criar divisórias internas impermeáveis sob medida para as mamadeiras!";
    } else if (produto === "bolsas") {
        mensagemDestaque.textContent = "Segredo de Ateliê: Nossas ecobags e nécessaires ganham uma durabilidade incrível com costura dupla reforçada e pingentes artesanais (tassels) no zíper.";
    } else if (produto === "canecas") {
        mensagemDestaque.textContent = "Segredo de Ateliê: Canecas em tons de argila com o nome em traço fino (line-art) são o presente perfeito para emocionar dindas e avós.";
    } else if (produto === "camisetas") {
        mensagemDestaque.textContent = "Segredo de Ateliê: Para camisetas, aposto no minimalismo: uma palavra de força ou uma data especial bordada bem pequena, pertinho do coração.";
    }
}

cardsDestaque.forEach(function(card) {
    card.addEventListener("click", function() {
        const produtoClicado = card.dataset.produto;

        if (produtoAtual === produtoClicado) {
            resetarMensagem();
        } else {
            produtoAtual = produtoClicado;
            mostrarMensagem(produtoClicado);
        }
    });
});

document.addEventListener("click", function(event) {
    const clicouNoCard = event.target.closest(".card-interativo");
    if (!clicouNoCard) {
        resetarMensagem();
    }
});
