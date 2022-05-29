'use strict';
/*

Symbols can be used for three distinct
purposes:
• To define properties for objects in such a way they don’t appear during
normal iteration—these properties are not private; they’re just not easily
discovered like other properties.
• To easily define a global registry or dictionary of objects.
• To define some special well-known methods in objects; this feature, which
fills the void of interfaces, is arguably one of the most important purposes
of Symbol.
*/
const age = Symbol('ageValue');
const email = 'emailValue';
const sam = {
first: 'Sam',
[email]: 'sam@example.com',
[age]: 2
};
//console.log('age: ' + age.toString);
console.log('email: ' + email);
console.log('sam: ' + sam);
console.log('iterating over properties:');
for(const property in sam) {
console.log(property + ' : ' + sam[property]);
}

console.log('list of property names:');
console.log(Object.getOwnPropertyNames(sam));
