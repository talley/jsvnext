'use strict';

const sortByTitle = function (books) {
    const byTitle = function (book1, book2) {
        return book1.title.localeCompare(book2.title);
    };
    return books.slice().sort(byTitle);
};

const books = [
    { title: 'Who Moved My Cheese' },
    { title: 'Great Expectations' },
    { title: 'The Power of Positive Thinking' },
    { title: 'Allah is my God' }
];
console.log('---default sort-------');
console.log(books.sort());
console.log('---sort by callback-------');
console.log(sortByTitle(books));

const sortByTitle2 = function (books, ascending = true) {
    const multiplier = ascending ? 1 : -1;
    const byTitle2 = function (book1, book2) {
        return book1.title.localeCompare(book2.title) * multiplier;
    };
    return books.slice().sort(byTitle2);
};
console.log(sortByTitle2(books, true));
console.log(sortByTitle2(books, false));
const fetchData = function (
    id,
    location = { host: 'localhost', port: 443 },
    uri = 'employees')
 {
    console.log('Fetch data from https://' +
        location.host + ':' + location.port + '/' + uri);
};
fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);
fetchData(3, undefined, 'books');
