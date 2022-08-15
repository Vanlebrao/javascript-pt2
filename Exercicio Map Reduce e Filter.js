const companies = [
    
    {name:'Samsung', marketValue:50, CEO:'Kim Hyun Suk', fundedOn: 1938},
    {name:'Microsoft', marketValue:415, CEO:'Satya Nadella', fundedOn: 1975},
    {name:'Intel', marketValue:117, CEO:'Brian Krzanich', fundedOn: 1968},
    {name:'Facebook', marketValue:383, CEO:'Mark Zuckerberg', fundedOn: 2004},
    {name:'Spotify', marketValue:30, CEO:'Daniel Ek', fundedOn: 2006},
    {name:'Apple', marketValue:845, CEO:'Tim Cook', fundedOn: 1976}

];

const add10PercentMarketValue = company => {
    company.marketValue += company.marketValue / 10
    return company
}

const oldestCompanies = company => company.fundedOn < 2000

const sumMartketValuecompanies = (acc, current) => acc + current.marketValue

const mostValuableCompany = companies.map(add10PercentMarketValue).filter(oldestCompanies).reduce(sumMartketValuecompanies,0)

console.log(mostValuableCompany)

