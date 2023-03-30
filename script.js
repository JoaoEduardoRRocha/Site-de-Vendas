const carrinhoMinimizado = document.querySelector(".carrinhoDeCompraMinimizado")
const carrinhoAberto = document.querySelector(".abaFixaDoCarrinhoDeCompra")
const botaoQueFechaCarrinhoAberto = document.querySelector(".fecharCarrinho")

const caixaDeVendasComAsCamisetasEBotoes = document.querySelector(".caixaComAsCamisasDentro")
const botaoPretoEVermelhoQueMudaACorDaCamiseta = document.querySelector(".botaoDeTrocaDeCor")
const botaoPreto = document.querySelector(".botaoParaMudarParaCorPreta")
const botaoVermelho = document.querySelector(".botaoParaMudarParaCorVermelha")

const todoOModal = document.querySelector(".modalInteiro")
const botaoDeFinalizar = document.querySelector(".finalizarCompra")
const botaoDeVoltar = document.querySelector(".fecharModalEVoltarAoInicio")


carrinhoMinimizado.addEventListener('click', function() {
    carrinhoMinimizado.toggleAttribute('hidden')
    carrinhoAberto.toggleAttribute('hidden')
})

botaoQueFechaCarrinhoAberto.addEventListener('click', function() {
    carrinhoAberto.toggleAttribute('hidden')
    carrinhoMinimizado.toggleAttribute('hidden')
})

botaoDeFinalizar.onclick = event => {
    event.preventDefault()

    todoOModal.classList.add('open')
}

botaoDeVoltar.onclick = event => {
    event.preventDefault()

    todoOModal.classList.remove('open')
}