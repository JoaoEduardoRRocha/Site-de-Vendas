// futuramente adicionar 1 botão de remover
const buttonRemove = document.getElementByClassName (".removerProduto")


for(var i = 0; i < buttonRemove; i++) {
    buttonRemove[i].addEventListener('click', function(event) {

    // acessando elemento PAI para remover todo o produto selecionado
    event.target.parentElement.parentElement.remove()
})
}


const buttonComprarCarrinho = document.querySelector(".botaoCompraOuCarrinho")
for (var i = 0; i < buttonComprarCarrinho.length; i++) {
    buttonComprarCarrinho[i].addEventListener("click", adicionarProdutoNoCarrinho)
}

function adicionarProdutoNoCarrinho(event) {

}

