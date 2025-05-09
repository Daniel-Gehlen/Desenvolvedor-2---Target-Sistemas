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
