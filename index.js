#!/usr/bin/env node
import inquirer from 'inquirer';
const Currrency = {
    USD: 1,
    EUR: 0.91,
    GPB: 0.76,
    INR: 74.57,
    PKR: 280,
    Din: 40,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currrency",
        type: 'list',
        choices: ['USD', 'EUR', 'GPB', 'Din', 'INR', 'PKR'],
    },
    {
        name: 'to',
        message: "Enter to Currrency",
        type: 'list',
        choices: ['USD', 'EUR', 'GPB', 'Din', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number',
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = Currrency[userFromCurrency]; //exchange rate
let toAmount = Currrency[userToCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
/*console.log(fromAmount);
console.log(toAmount);
console.log(amount);*/
