describe("Teste Calculadora", function(){
    it("Somas válidas", function(){
        expect(soma(1,2)).toBe(3);
        expect(soma(9,9)).toBe(18);
    });

    it("Subtrações válidas", function(){
        expect(subtracao(5,3)).toBe(2);
        expect(subtracao(10,7)).toBe(3);
    });

    it("Multiplicações válidas", function(){
        expect(multiplicacao(2,3)).toBe(6);
        expect(multiplicacao(4,5)).toBe(20);
    });

    it("Divisões válidas", function(){
        expect(divisao(6,3)).toBe(2);
        expect(divisao(15,5)).toBe(3);
    });

    
    it("Somas válidas", function(){
        expect(soma(1,2)).toBe(3);
        expect(soma(9,9)).toBe(1);
    });
});
