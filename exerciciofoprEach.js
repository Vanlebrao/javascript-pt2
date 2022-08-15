const zooAnimals = [
    {gênero: "Felinos", espécie:"tigre", age: 10, Alimentação: "Carnívora" },
    {gênero: "Canídeos", espécie: "Lobo-guará", age:2, Alimentação: "carnivora"},
    {gênero: "Aves", espécie:"Arara", age:8, alimentação:"Frutos e sementes"},
    {gênero: "Equídeo", espécie:"Zebra", age:9, alimentação:"herbívoro"},
    {gênero: "Elephantidae", espécie:"Elefante-africano", age:30, alimentação:"herbívoro"}
]

let allAnimalsAge = 0

zooAnimals.forEach ((animals,index) => {

    allAnimalsAge += animals.age

})

const avarageAge = allAnimalsAge / zooAnimals.length

console.log(`A média da idade dos animais do DevZoo é de ${avarageAge.toFixed(0)}`)