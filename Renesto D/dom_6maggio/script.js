// console.log(document) // mostra la struttura

// dinamic
const primoP = document.getElementById('primo_p');
primoP.textContent = 'ciao ciao';
primoP.style.backgroundColor = 'cyan';
// primoP = document.getElementById(secondo_p); // errore! primo_p è const

const pCollection = document.getElementsByTagName('p');
// console.log(pCollection);
pCollection[1].style.backgroundColor = 'green';

for (p of pCollection) {
    p.style.backgroundColor = 'blue';
}

const pList = document.querySelectorAll('p');
// console.log(pList); // nella console appare NodeList
pList.forEach(p => p.style.background = 'yellow');
// il forEach su pCollection non funziona (solo con le querySelection)
pList.forEach(p => p.style.padding = '10px');


const nodeList = document.querySelectorAll('p');
const htmlCollection = document.getElementsByTagName('p');
console.log(nodeList);
console.log(htmlCollection);
console.log('------------');


// creare un elemento hmtl
const newPara = document.createElement('p');
newPara.textContent = 'Sono il paragrafo creato da JS';
newPara.style.backgroundColor = '#7fa832';
const body = document.getElementsByTagName('body');
body[0].appendChild(newPara); // aggiungo un elemento in coda
console.log(body);

console.log(nodeList);
console.log(htmlCollection);

/*
const newPara2 = document.createElement('p');
newPara2.textContent = 'Sono il secondo paragrafo creato da JS';
newPara2.style.backgroundColor = '#cc6262';
body[0].insertBefore(newPara2, body[0].children[3]);

// eliminare un elemento
body[0].removeChild(body[0].children[1]);
console.log(document);
*/