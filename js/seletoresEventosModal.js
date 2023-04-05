export {
    carrinhoMinimizado,
    carrinhoAberto,
    listaDoCarrinho,
    botaoQueFechaCarrinhoAberto,
    caixaDeVendasComAsCamisetasEBotoes,
    botaoPretoEVermelhoQueMudaACorDaCamiseta,
    camisetaPretaParaVermelha,
    camisetaVermelhaParaPreta,
    todoOModal, 
    botaoDeFinalizar, 
    botaoDeVoltar,
    botaoComprarECarrinho, 
    removerItem, 
}

// TODOS OS SELETORES
const carrinhoMinimizado = document.querySelector(".carrinhoDeCompraMinimizado")
const carrinhoAberto = document.querySelector(".abaFixaDoCarrinhoDeCompra")
const listaDoCarrinho = document.querySelector(".listaDoCarrinho")
const botaoQueFechaCarrinhoAberto = document.querySelector(".fecharCarrinho")
const caixaDeVendasComAsCamisetasEBotoes = document.querySelector(".caixaComAsCamisasDentro")
const botaoPretoEVermelhoQueMudaACorDaCamiseta = document.querySelector(".botaoDeTrocaDeCor")
const camisetaPretaParaVermelha = document.querySelector(".camisetaPreta")
const camisetaVermelhaParaPreta = document.querySelector(".camisetaVermelha")
const todoOModal = document.querySelector(".modalInteiro")
const botaoDeFinalizar = document.querySelector(".finalizarCompra")
const botaoDeVoltar = document.querySelector(".fecharModalEVoltarAoInicio")
const botaoComprarECarrinho = document.querySelector(".botaoCompraOuCarrinho")
const removerItem = document.querySelector("removerItem")

// EVENTOS DE MOSTRAR/TIRAR COISAS DA TELA
{
    carrinhoMinimizado.addEventListener('click', function() {
        carrinhoAberto.classList.remove('hidden')
        carrinhoMinimizado.classList.add('hidden')
    })
    
    botaoQueFechaCarrinhoAberto.addEventListener('click', function() {
        carrinhoAberto.classList.add('hidden')
        carrinhoMinimizado.classList.remove('hidden')
    })
    
    botaoDeFinalizar.onclick = event => {
        event.preventDefault()
    
        todoOModal.classList.add('open')
    }
    
    botaoDeVoltar.onclick = event => {
        event.preventDefault() 
    
        todoOModal.classList.remove('open')
        carrinhoAberto.classList.add('hidden')
        carrinhoMinimizado.classList.remove('hidden')
    }
}
