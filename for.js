const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
console.log('----regualar way--');
for(let i = 0; i < names.length; i++) {
console.log(names[i]);
}
console.log('----for of--');
for(let n  of names) {
    console.log(n)
}
console.log('----entries()--');
for(const entry of names.entries()) {
    console.log(entry);
    }
    console.log('----key index/values--');
    for(const [i, name] of names.entries()) {
        console.log(i + '--' + name);
        }
