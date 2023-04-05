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

const camisetas = [{
    "id": "1",
    "tipo": "camiseta",
    "nome": "Camiseta Básica",
    "cor": "Preta",
    "preco": "R$10,00",
    "tamanho": "P",
    "linkImagem": "camisetapreta.png",
    "linkImagem2": "camisetavermelha.png",
},
{
    "id": "2",
    "tipo": "camiseta",
    "nome": "Camiseta Básica",
    "cor": "Vermelha",
    "preco": "R$20,00",
    "tamanho": "M",
    "linkImagem": "camisetapreta.png",
    "linkImagem2": "camisetavermelha.png",
},
{
    "id": "3",
    "tipo": "camiseta",
    "nome": "Camiseta Básica",
    "cor": "Amarela",
    "preco": "R$30,00",
    "tamanho": "G",
    "linkImagem": "camisetapreta.png",
    "linkImagem2": "camisetavermelha.png"
},
]

function AdicionarCamisetasNoCarrinho() {
    const primeiraLista = document.getElementById("primeiraAreaDeCompras")
    const botaozinhoTrocaDeCor = document.querySelector(".botaoParaMudarParaCorVermelha")

    camisetas.forEach( element => {

        // div 1
        var li = document.createElement('li')
        li.setAttribute("data-id", element.id)
        
        var primeiraDiv = document.createElement('div')
        primeiraDiv.className = "botaoTrocaDeCor"

        var botaozinhoTrocaDeCor = document.createElement('button')
        botaozinhoTrocaDeCor.className = "botaoParaMudarParaCorPreta"
        botaozinhoTrocaDeCor.setAttribute("data-id", element.id)

        primeiraDiv.appendChild(botaozinhoTrocaDeCor)

        // div 2
        var segundaDiv = document.createElement('div')
        segundaDiv.className = "caixaComAsCamisasDentro"

        var imagem1 = document.createElement('img')
        imagem1.src= "./img/" + element.linkImagem

        var imagem2 = document.createElement('img')
        imagem2.src= "./img/" + element.linkImagem2
        imagem2.hidden = "true"
        
        botaozinhoTrocaDeCor.onclick = event => {
            const element = event.target
            const id = element.attributes["data-id"].value
            const li = document.querySelector(`[data-id="${id}"]`)
            const images = li.querySelectorAll("img")
            images[0].toggleAttribute("hidden")
            images[1].toggleAttribute("hidden")
        }

        var primeiraLabel = document.createElement('label')
        primeiraLabel.id = "nomeDoProduto"
        primeiraLabel.className = "nomeDoProduto"
        primeiraLabel.innerHTML = element.nome

        var segundaLabel = document.createElement('label')
        segundaLabel.innerHTML = element.preco

        segundaDiv.appendChild(imagem1)
        segundaDiv.appendChild(imagem2)
        segundaDiv.appendChild(primeiraLabel)
        segundaDiv.appendChild(segundaLabel)

        // div 3
        var terceiraDiv = document.createElement('div')
        terceiraDiv.className = "botaoComprarCarrinho"

        var comprar = document.createElement('button')
        comprar.innerHTML = "Comprar"

        var carrinho = document.createElement('button')
        carrinho.innerHTML = "+ Carrinho"

        terceiraDiv.appendChild(comprar)
        terceiraDiv.appendChild(carrinho)

        li.appendChild(primeiraDiv)
        li.appendChild(segundaDiv)
        li.appendChild(terceiraDiv)

        carrinho.addEventListener('click', function() {
            const objetoNoCarrinho = segundaDiv.cloneNode(true)
            objetoNoCarrinho.className = "objetoNoCarrinho"

            listaDoCarrinho.appendChild(objetoNoCarrinho)
        })

        carrinho.addEventListener('click', function() {
            const removerItemDoCarrinho = document.createElement('button')
            removerItemDoCarrinho.className = "removerItem"
            removerItemDoCarrinho.innerHTML = "REMOVER ITEM DO CARRINHO"

            listaDoCarrinho.appendChild(removerItemDoCarrinho)
        })

        primeiraLista.appendChild(li);
    })
}

AdicionarCamisetasNoCarrinho()
