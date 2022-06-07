import Combo from "./combo";
import Produto from "./produto";

export default class Vinculador {
    public vincular(combos: Combo[], produtos: Produto[], idProduto: string, idCombo: string): void {
        combos.forEach(combo => {
            if (combo.obterId() == idCombo) {
                produtos.forEach(produto => {
                    if (produto.obterId() == idProduto) {
                        combo.adicionar(produto)
                    }
                })
            }
        })
    }
}