//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
//A prefeitura deseja saber: - média do salário da população; - média do número de filhos;
//- maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const people = [
    {
        numberOfChildren: 3,
        salary: 2750
    },
    {
        numberOfChildren: 6,
        salary: 1930
    },
    {
        numberOfChildren: 0,
        salary: 2000
    },
    {
        numberOfChildren: 2,
        salary: 990
    },
    {
        numberOfChildren: 4,
        salary: 7000
    },
    {
        numberOfChildren: 0,
        salary: 8000
    },
    {
        numberOfChildren: 1,
        salary: 3000
    },
    {
        numberOfChildren: 10,
        salary: 5500
    },
    {
        numberOfChildren: 3,
        salary: 500
    },
    {
        numberOfChildren: 0,
        salary: -3000
    },

]

function findAverageAndHighestSalary(peopleInformation) {

    let i = 0;
    let averageSalary = 0 //média de salário
    let averageChildren = 0 //média de crianças
    let highestSalary = 0 //maior salário

    while (peopleInformation[i].salary > 0) {
        averageSalary = averageSalary + peopleInformation[i].salary
        averageChildren += peopleInformation[i].numberOfChildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
    }

    console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
    console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
    console.log(`Maior salário R$${highestSalary}`)
}


findAverageAndHighestSalary(people)

//let averageSalary = 0 //média de salário
//let averageChildren = 0 //média de crianças
//let highestSalary = 0 //maior salário

//for (let i = 0; i <= peopleInformation.length; i++) {

    //const salary = peopleInformation[i].salary
    //const children = peopleInformation[i].numberOfChildren

    //if (salary > highestSalary) highestSalary = salary

    //if (salary < 0) {
        //console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
        //console.log(`Média de filhos ${(averageChildren / i)}`)
        //console.log(`Maior Salário R$${highestSalary}`)
       // break
   // } else{
      //  averageSalary = averageSalary + salary;
      //  averageChildren += children

   // }
//}

//}
