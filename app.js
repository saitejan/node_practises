const sum = require('./utils.js')
require('./acc.js')

const greet = require('./greet');
let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

retirementAccountBalance = 40000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
console.log('Swedish ' +
  greet.sayHelloInSwedish() +
  ' & English ' +
  greet.sayHelloInEnglish() +
  ' & Tatar ' +
  greet.sayHelloInTatar())