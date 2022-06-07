import Componente from "../interfaces/componente";
import Produto from "./produto";

export default class Combo implements Componente {
    private id: string
    private nome: string
    private objetos: Componente[]
    constructor(nome: string, id: string) {
        this.nome = nome
        this.objetos = []
        this.id = id
    }
    obterId(): string {
        return this.id
    }
    public adicionar(objeto: Componente): void {
        this.objetos.push(objeto)
    }
    public remover(objeto: Componente): void {
        let alvo = objeto as Produto
        for (let index = 0; index < this.objetos.length; index++) {
            let elemento = this.objetos[index] as Produto
            if (elemento.obterId() == alvo.obterId()) {
                let posicao = this.objetos.indexOf(elemento)
                this.objetos.splice(posicao, 1)
                break
            }
        }
    }
    obterDescricao(): string {
        let descricao = `Combo: ${this.nome} - id: ${this.id} \n`
        descricao = descricao + `Produtos: \n`
        this.objetos.forEach(objeto => {
            let descricaoProduto = `----------------------------------\n`
                + objeto.obterDescricao()
                + `----------------------------------\n`
            descricao = descricao + descricaoProduto
        })
        descricao = descricao + `valor do combo: ${this.obterPreco()}\n`
        return descricao
    }
    obterPreco(): number {
        let valor = 0
        this.objetos.forEach(objeto => {
            valor = valor + objeto.obterPreco()
        })
        return valor
    }

}