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
