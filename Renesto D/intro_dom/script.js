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