const faturamentoDiario = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    // ... outros dias ...
    {"dia": 30, "valor": 37740.5152}
];

function analisarFaturamento(dados) {
    const valores = dados.map(item => item.valor).filter(valor => valor > 0);
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((sum, val) => sum + val, 0) / valores.length;
    const acimaMedia = valores.filter(valor => valor > media).length;
    
    return {
        menorValor: menor,
        maiorValor: maior,
        diasAcimaMedia: acimaMedia
    };
}

const resultado = analisarFaturamento(faturamentoDiario);
console.log("Menor valor:", resultado.menorValor);
console.log("Maior valor:", resultado.maiorValor);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaMedia);
