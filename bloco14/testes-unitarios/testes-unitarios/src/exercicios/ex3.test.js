import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para intens duplicados", () => {
        const ContemItensDuplicados = checaItensDuplicados([1, 2 ,1]);
        expect(ContemItensDuplicados).toEqual(true);
      });

    test("retorna true para intens duplicados", () => {
        const ContemItensDuplicados = checaItensDuplicados(["a", "a", "b", "c"]);
        expect(ContemItensDuplicados).toEqual(true);
      });

    test("retorna true para intens duplicados", () => {
        const ContemItensDuplicados = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(ContemItensDuplicados).toEqual(true);
      });

    test("retorna true para intens duplicados", () => {
        const ContemItensDuplicados = checaItensDuplicados([]);
        expect(ContemItensDuplicados).toEqual(true);
      });  
      

});
