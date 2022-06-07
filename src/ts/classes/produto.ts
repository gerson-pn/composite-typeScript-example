import Componente from "../interfaces/componente";

export default class Produto implements Componente {
    private id: string
    private nome: string
    private valor: number
    constructor(nome: string, valor: number, id: string) {
        this.nome = nome
        this.valor = valor
        this.id = id
    }
    obterId(): string {
        return this.id
    }
    obterDescricao(): string {
        return `Nome: ${this.nome}\nValor: ${this.valor}\nid: ${this.id}\n`
    }
    obterPreco(): number{
        return this.valor
    }
}