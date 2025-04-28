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
function myFunction(var1, var2, var3) {
    var3++;
    console.log(var1 + var2);
    console.log(var3);
}

myFunction(10, 25, var3);
console.log(var3);