// Usando o MAP, tranforma em uma outra lista.Se for vip ela fica no setor black se não for ela fica no setor green

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },

];

const newList = list.map((sector) => 
  sector.vip ? { ...sector, sector: 'Black' } : { ...sector, sector: 'Green' })

  console.log (newList)


  //RESOLUÇÃO DA AULA
//const newList = list.map(item => {
   // const newList = {
     //   name: item.name,
       // vip: item.vip,
       // sector: item.vip ? 'Black' : 'Green'

   // }
   // return newList
   
//})
 //console.log(newList)


//usando o MAP se o estudante tirou 7 ou mais ele está aprovado se não ele está reprovado
const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
];

const finalTest = students.map( student => {
    let approved

    if(student.testGrade <7){
        approved = 'Disapproved'
    } else {
        approved = 'Approved'
    }

    const students = {
        name: student.name,
        finalResult: approved
    }

    return students
})
console.log(finalTest)
