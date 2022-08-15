//Escreva um programa onde, você chama uma função enviando um número (aceitar somente valores entre 1 e 10)
//e escreva a tabuada de 1 a 10 do valor lido.

const table = (number) => {
    if(number > 10 || number < 1){
        console.log("Somente números entre 1 à 10")
        return
    }

    for(let i = 1; i<= 10; i++){
        console.log(`${i} x ${number} = ${i * number}`)
    }
}

table(9)