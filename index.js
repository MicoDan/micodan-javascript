const express = require('express');
const app = express();
//this represents the GET API to do addition of list of numbers and return their sum

/* i, */app.get('/add', (req, res) => {
    const numbers = req.query.numbers;
    let sum = 0
    const arr = numbers.split(',').map(Number)
    for(const numb of arr){
    sum = sum + num
    }
    res.send(`The sum of numbers is: ${sum}`);
});

//the below code represents the GET API to do multiplication of an array of numbers and return the product

/* ii, */ app.get('/multiply', (req, res) => {
    const numbers = req.query.numbers;
    let product = 1
    const nums = numbers.split(',').map(Number)
    for(const num of nums){
        product = product * num
    }
    res.send(`The product of numbers is: ${product}`);
});
//this means that my app is listening on port 3000

app.listen(3000, () => {
    console.log('calculator on port 3000!');
});
