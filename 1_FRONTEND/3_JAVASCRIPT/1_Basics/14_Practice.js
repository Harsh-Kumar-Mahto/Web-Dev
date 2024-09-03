// Make array of companies
// 1.remove first company
// 2.remove Uber & Add Ola in its place
// 3.Add amazon at end

let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
// 1
company.shift();
console.log(company);
// 2
company.splice(1,1,"Ola");
console.log(company);
// 3
company.push("Amazon");
console.log(company);
