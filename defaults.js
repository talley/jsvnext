const printAny = (message) => {
    if (message) {
        console.log(message);
    }
    message = 'Hello World!';
    console.log(message);
};
printAny();
printAny('Abibou');
const computeTax = function (amount,
    stateTax = 15, localTax = stateTax * .10) {
    console.log('stateTax: ' + stateTax + ' localTax: ' + localTax + ' amount: ' + amount);
};
computeTax(100, 10, 2);
computeTax(100, 10);
computeTax(100);
