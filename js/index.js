// IMPORTANDO APENAS OS SELETORES USADOS
import {
    carrinhoMinimizado,
    botaoQueFechaCarrinhoAberto,
    botaoDeFinalizar,
    botaoDeVoltar,
} from "./seletoresEventosModal.js"

// IMPORTANDO TODO SCRIPT DE ADICIONAR/REMOVER COISAS DO CARRINHO
import AdicionarCamisetasNoCarrinho from "./eventosDoCarrinho.js";

// EXECUTANDO TODAS AS FUNÇÕES DA APLICAÇÃO QUE FORAM IMPORTADAS
AdicionarCamisetasNoCarrinho()
carrinhoMinimizado()
botaoQueFechaCarrinhoAberto()
botaoDeFinalizar()
botaoDeVoltar()
