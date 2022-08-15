//Escreva um programa onde, você chama uma função enviando um número, a função deve imprimir na tela os números de 1 até o número que vc enviou.

const numbers = (number) => {
    for (i=1; i < number; i++){
        console.log (i)
    }
}

numbers(20)