const zooAnimals = [
    {gênero: "Felinos", espécie:"tigre", age: 10, Alimentação: "Carnívora" },
    {gênero: "Canídeos", espécie: "Lobo-guará", age:2, Alimentação: "carnivora"},
    {gênero: "Aves", espécie:"Arara", age:8, Alimentação:"Frutos e sementes"},
    {gênero: "Equídeo", espécie:"Zebra", age:9, Alimentação:"herbívoro"},
    {gênero: "Elephantidae", espécie:"Elefante-africano", age:30, Alimentação:"herbívoro"}
];

const numbers =[1,2,3,4]
const newArray = numbers.map ((number) => {
    return number * 2
})

const newAnimals = zooAnimals.map ( (zooAnimals) =>{
    const newAnimals = {
        Alimentação: zooAnimals.Alimentação + ' RAÇÃO',
        age: zooAnimals.age + 10
    }
    return newAnimals
})
console.log(zooAnimals)
console.log(newAnimals)
console.log(numbers)
console.log(newArray)