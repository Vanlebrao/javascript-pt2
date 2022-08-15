const list = [ 20,3,234,12,17,541,6,87,275,1000 ]; //FILTRE apenas números pares e divisivéis por 5

const pairsList = list.filter ( number => {
    if(number % 2 === 0 && number % 5 === 0) return true
    else return false
 })
    

console.log(pairsList)


//Filtre empresas criadas após de 1975 e que tenham mais de 2 milhões de dólares de mercado.
const companies = [
    
    {name:'Samsung', marketValue:50, CEO:'Kim Hyun Suk', fundedOn: 1938},
    {name:'Microsoft', marketValue:415, CEO:'Satya Nadella', fundedOn: 1975},
    {name:'Intel', marketValue:117, CEO:'Brian Krzanich', fundedOn: 1968},
    {name:'Facebook', marketValue:383, CEO:'Mark Zuckerberg', fundedOn: 2004},
    {name:'Spotify', marketValue:30, CEO:'Daniel Ek', fundedOn: 2006},
    {name:'Apple', marketValue:845, CEO:'Tim Cook', fundedOn: 1976}

];
const foundCompanies = companies.filter ( companies => {
    if(companies.fundedOn > 1975 && companies.marketValue >= 200) return true
    else return false
 })
    

console.log(foundCompanies)