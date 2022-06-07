export default class Gerador {
    public gerarId(min: number, max: number): string {
        min = Math.ceil(min);
        max = Math.floor(max);
        let id = new Number(Math.floor(Math.random() * (max - min + 1)) + min)
        return id.toString()
    }
}