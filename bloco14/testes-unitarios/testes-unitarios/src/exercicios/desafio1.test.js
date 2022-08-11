import { arrayOrdenado } from "./desafio1";

describe("Checa itens desordenado", () => {
    it("retorna true se contiver intens desordenados", () => {
        const ContemItemDesordenado = arrayOrdenado([1, 2]);
        expect(ContemItemDesordenado).toEqual(true);
      });
        

});