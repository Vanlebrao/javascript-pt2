// Escreva um programa onde, você cria uma função geradora de desconto.
//A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

//A função deve imprimir na tela:
//Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
//Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.

//Os descontos funcionam da seguinte forma:
const calculateDiscount = (name, amount, firstPurchase, cashPayment) => {
    if (firstPurchase && cashPayment) {

        //Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
        if (amount >= 1000) {
            const discount = (amount * 30).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 30% o valor total de sua compra é de ${totalPayment} reais`)
        }
        //Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
        else if (amount <= 500) {
            const discount = (amount * 20).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 20% o valor total de sua compra é de ${totalPayment} reais`)
        }
        //Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
        else {
            const discount = (amount * 25).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 25% o valor total de sua compra é de ${totalPayment} reais`)
        }

    }
    if (firstPurchase && !cashPayment) {

        //Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
        if (amount >= 1000) {
            const discount = (amount * 20).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 20% o valor total de sua compra é de ${totalPayment} reais`)
        }
        //Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
        else if (amount <= 500) {
            const discount = (amount * 10).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 10% o valor total de sua compra é de ${totalPayment} reais`)

        }
        //Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
        else {
            const discount = (amount * 15).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 15% o valor total de sua compra é de ${totalPayment} reais`)
        }

    }
    if (!firstPurchase && cashPayment) {
        //Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
        if (amount >= 1000) {
            const discount = (amount * 20).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 20% o valor total de sua compra é de ${totalPayment}reais`)
        }
        //Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
        else if (amount <= 500) {
            const discount = (amount * 10).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 10% o valor total de sua compra é de ${totalPayment} reais`)
        }
        //Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
        else {
            const discount = (amount * 15).toFixed(2) / 100
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 15% o valor total de sua compra é de ${totalPayment} reais`)

        }

    }
    if (!firstPurchase && !cashPayment) {

        //Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto
        if (amount >= 1000) { 
            const discount = (amount * 10).toFixed(2) / 100 
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 10% o valor total de sua compra é de ${totalPayment} reais`)
        }
        //Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
        else if (amount <= 500) {

            const discountCoupon= Math.floor(Math.random() * (20 - 10) + 10)
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais. Cupom gerado para próxima compra de ${discountCoupon}% de desconto.`)
        }
        // Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
        else {
            const discount = (amount * 5).toFixed(2) / 100 
            const totalPayment = amount - discount
            console.log(`Obrigada por escolher a DevStore ${name}, sua compra é de ${amount} reais, com o desonto de 5% o valor total de sua compra é de ${totalPayment}reais`)
         }

     return    

    }    
}

let name = "Gustavo"
let amount = 200
const firstPurchase = true  
const cashPayment = false


calculateDiscount(name, amount, firstPurchase, cashPayment)