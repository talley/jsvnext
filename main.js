'use strick';

const oops = function () {
    haha = 2;
    console.log(haha);
};
oops();
console.log(haha);

console.log(message);
console.log('Entering loop');
for (var i = 0; i < 3; i++) {
    console.log(message); //visible here, but undefined
    var message = 'spill ' + i;
}
console.log('Exiting loop');
console.log(message);

console.log(message);
console.log('Entering loop');
for (var i = 0; i < 3; i++) {
    console.log(message); //visible here, but undefined
    var message = 'spill ' + i;
}
console.log('Exiting loop');
console.log(message);

const pi = 2.14;
//pi=34;

const max = 200;
const ok = true;
const nothing = undefined;
const nope = null;
const sam = { first: 'Sam', age: 2 };
sam.age = 45;

const max2 = function () {
    console.log('---arguments--')
    console.log(arguments instanceof Array);
    let large = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > large) {
            large = arguments[i];
        }
    }
    return large;
};

const max3 = function (...values) {
    let large = values[0];
    for (i = 0; i < values.length; i++) {
        if (values[i] > large) {
            large = values[i];
        }
    }
    return large;
}
const max4 = function (...values) {
    return values.reduce((large, e) => large > e ? large : e, values[0]);
};

const greet2 = function (...names) {
    console.log('hello ' + names.join(', '));
};
const tj = ['Tom', 'Jerry'];
greet2(...tj);

const names1 = ['Tom', 'Jerry'];
const names2 = ['Butch', 'Spike', 'Tyke'];
console.log([...names1, 'Brooke']);
console.log([...names1, ...names2]);
console.log([...names2, 'Meathead', ...names1]);
