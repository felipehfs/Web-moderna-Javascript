const companies = [
    {name: "Company One", category: "finance", starts: 2000, end: 2010},
    {name: "Company Two", category: "Auto", starts: 2008, end: 2012},
    {name: "Company Three", category: "Tecnology", starts: 2002, end: 2009},
    {name: "Company Four", category: "finance", starts: 1996, end: 2016}
];

// Filtra apenas as empresas no ramo de finanças
const financeCompanies = companies.filter(company => company.category === 'finance');

console.log("\nFinance Companies");
financeCompanies.forEach(company => console.log(company.name));

// Map
const companiesNames = companies.map(company => company.name);
console.log("Name of the companies");
console.log(companiesNames);

// Ordenação
const sortedCompanies = companies.sort((c1, c2) => c1.starts > c2.starts);
console.log(sortedCompanies);

// reduce
const ages = [23, 13, 70, 42];

let ageSum = ages.reduce((acum, age)=> acum + age, 0);
console.log(`The age sum is ${ageSum}`);

// Obtém o total de anos para todas as empresas
const totalYears = companies.reduce((acum, company)=>{
    return acum + (company.end - company.starts);
}, 0);

console.log(`Total de anos das companias: ${totalYears}`);

// Combinando métodos
const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b)=> a - b)
.reduce((total, item) => total += item,  0);
console.log(combined);