import Combo from "../classes/combo";
import Gerador from "../classes/gerador";
import Produto from "../classes/produto";
import Vinculador from "../classes/vinculador";
import Entrada from "../io/entrada";

let combos: Combo[] = []
let produtos: Produto[] = []

console.log(`Bem-vindo(a) ao sistema da lojas on-line`)
console.log(`Neste sistema deve-se cadastrar os produtos e combos que serão ofertados no site da loja`)

let execucao = true
let entrada = new Entrada()
let gerador = new Gerador()
let vinculador = new Vinculador()

while (execucao) {
    console.log(`Por favor selecione uma opcao: `);
    console.log(`1 - Cadastrar produto`);
    console.log(`2 - Cadastrar combo`);
    console.log(`3 - Listar produtos`);
    console.log(`4 - Listar combos`);
    console.log(`5 - Vincular produto a um combo`);
    console.log(`6 - Remover produto de um combo`);
    console.log(`7 - Excluir um produto`);
    console.log(`8 - Excluir um combo`);
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero('Qual a opcao desejada? ')

    switch (opcao) {
        case 1:
            let nome = entrada.receberTexto('Qual o nome do produto? ')
            let valor = entrada.receberNumero('Qual o valor do produto? ')
            let produto = new Produto(nome, valor, gerador.gerarId(1, 1000))
            produtos.push(produto)
            break;
        case 2:
            let nomeCombo = entrada.receberTexto('Qual o nome do combo? ')
            let combo = new Combo(nomeCombo, gerador.gerarId(1000, 2000))
            combos.push(combo)
            break;
        case 3:
            produtos.forEach(produto => {
                console.log(produto.obterDescricao())
            })
            break;
        case 4:
            combos.forEach(combo => {
                console.log(combo.obterDescricao())
            })
            break;
        case 5:
            let idProduto = entrada.receberTexto('Qual o id do produto? ')
            let idCombo = entrada.receberTexto('Qual o id do Combo? ')
            vinculador.vincular(combos, produtos, idProduto, idCombo)
            break;
        case 0:
            execucao = false
            console.log(`Até logo`);
            break;
        default:
            console.log(`Opcao não entendida`);

    }
}