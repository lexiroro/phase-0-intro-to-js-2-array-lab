// Write your solution here!
const cats =[
    "Milo", "Otis", "Garfield"
];

function destructivelyAppendCat(name) { 
    cats.push(name);
}
destructivelyAppendCat;

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat;

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
 

function appendCat(name) {
//     const copyOfCats = cats.slice();
// copyOfCats.push(name);
// return copyOfCats;
const copyOfCats = [...cats, name];
return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1,3);
    return copyOfCats;
}