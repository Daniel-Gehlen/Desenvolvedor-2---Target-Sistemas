# Desenvolvedor-2 - Target-Sistemas

# Respostas aos Exercícios

## 1) Cálculo da SOMA

```javascript
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // Resultado: 91
```

**Explicação**: O loop soma todos os números de 1 a 13 (1+2+3+...+13), que resulta em 91.

## 2) Verificação de número na sequência de Fibonacci

```javascript
function isFibonacci(num) {
    let a = 0, b = 1, temp;
    
    while (b <= num) {
        if (b === num) return true;
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return false;
}

// Exemplo de uso:
const numero = 21; // Pode ser alterado ou recebido via input
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
```

## 3) Análise de faturamento diário (usando JSON)

```javascript
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
```

## 4) Cálculo de percentual por estado

```javascript
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais(dados) {
    const total = Object.values(dados).reduce((sum, val) => sum + val, 0);
    const percentuais = {};
    
    for (const [estado, valor] of Object.entries(dados)) {
        percentuais[estado] = (valor / total) * 100;
    }
    
    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);
for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
```

## 5) Inversão de string

```javascript
function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

// Exemplo de uso:
const texto = "Hello, World!"; // Pode ser alterado ou recebido via input
const textoInvertido = inverterString(texto);
console.log("String original:", texto);
console.log("String invertida:", textoInvertido);
```
