// javascript
let js = 'js è un bel linguaggio';
console.log(js);
// dinamicamente tipizzato
let age = 27;
console.log(age);
age = 'non lo so';
console.log(age);
console.log(typeof 27);
console.log(typeof '4f');
console.log(typeof age);

// number - string - boolean
// null - undefined - symbol - bigint

console.log(5 + '4'); // il 5 viene trasformato in una stringa
let classe = '4f';
let indirizzo = 'Informatica';
let presentazione = `siamo in ${classe} indirizzo${indirizzo}`;
console.log(presentazione);
const inputYear = '1991';

// if else

for (let i = 0; i < 5; i++)
    console.log('js');

console.log(4 > 5 ? 'ok' : 'ko');

// operatore di uguaglianza == ===

/* confronta solo il valore
if (12 == '12') 
    console.log('Sono uguali');
else console.log('Sono diversi'); */

// confronta anche il tipo
if (12 === '12')
    console.log('Sono uguali');
else console.log('Sono diversi');

const amici = ['Francesco', 'Mohamed'];
const amici2 = new Array('Brr Brr Patapim', 'Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur');
console.log(amici);
amici.push('Sahur');
console.log(amici);
amici.pop('Sahur');
console.log(amici);
amici.forEach(myFunction);

var3 = 30;
function myFunction(var1, var2, var3) { // valore
    var3++;
    console.log(var1 + var2);
    console.log(var3);
}
myFunction(10, 25, var3);
console.log(var3);

function myFuncArr(myapp) { // riferimento
    myapp.push('Giuseppe');
}
myFuncArr(amici);
console.log(amici);

function printNum(...args) { // rest operator
    console.log(args);
}
printNum(2, 3, 4);
printNum(3, 4, 5, 6, 7, 8);

let addTwoNum = function (a, b) {
    return a + b;
}
console.log(addTwoNum(5, 2));

let addThreeNum = (a, b, c) => a + b + c;
console.log(addThreeNum(5, 2, 1));

amici.forEach((value, index, array) => array[index]);
console.log(amici);

let secondArray = amici.filter(nome => nome.startsWith('G'));
console.log(secondArray);

let saluti = amici.map(nome => `Ciao ${nome}`);
console.log(saluti);

mynum = [2, 3, 4, 6, 8, 10];
found = mynum.find(element => element > 5);
console.log(found);

num = mynum.reduce((accumulatore, numero) => {
    return accumulatore + numero;
}, 10);
console.log(num);

/* OGGETTO */
// copia key-valore

const persona = {
    nome: 'Antonio',
    eta: '25',
    studente: false,
    saluta: function (num) {
        console.log(`Ciao sono ${this.nome} e il mio numero preferito è ${num}`)
    }
};

console.log(persona.nome);
persona.saluta(10);

Object.values(persona).forEach(value => console.log());
Object.keys(persona).forEach(key => console.log(keys))
let entries = Object.entries(persona);
console.log(entries);