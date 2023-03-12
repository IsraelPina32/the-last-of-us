/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

/*- passo 1 - dar um jeito de pegar o elemento HTML dos botões*/
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.image');

///- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // - passo 3 - desmarcar o botão selecionado anterior
        desativaBotaoSelecionado();
        // - passo 4 - marcar o botão clicado como se estivesse selecionada
        botaoSelecionado(botao);
        // - passo 5 - esconder a imagem anterior
        escondeImagensAtiva();
        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostraImagensDeFundo(indice);
    })
})



function escondeImagensAtiva() {
     const imageAtiva = document.querySelector('.ativa');
     imageAtiva.classList.remove('ativa');
}

function mostraImagensDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function botaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}