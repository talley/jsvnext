'use strict';
/*
We can readily use the for…of syntax on an Array because it implements a
function named [Symbol.iterate].
To create custom iteration,implements [Symbol.iterator]() {}
*/
console.log('---loop')
const names = ['Tom', 'Jerry', 'Tyke'];
for (const name of names) {
    console.log(name);
}
console.log('---loop with iteration---');

class CardDeck {
    suitShapes = [];
    constructor() {
        this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }
    [Symbol.iterator]() {
        let index = -1;
        const self = this;
        return {
        next() {
        index++;
        return {
        done: index >= self.suitShapes.length,
        value: self.suitShapes[index]
        };
        }
        };
    }
}

class CardDeck2 {
    suitShapes = [];
    constructor() {
        this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }
    *[Symbol.iterator]() {
        for(const shape of this.suitShapes) {
        yield shape;
        }
        }
}
const deck = new CardDeck2();
for (const suit of deck) {
    console.log(suit); //error TypeError: deck is not iterable
}
