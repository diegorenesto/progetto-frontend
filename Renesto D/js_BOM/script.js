/* DOM document */
/* BOM window */

// window.alert('ciao 4f');
/* const numero = window.prompt();
window.alert(Number(numero) + 10);
*/

console.log(window.innerWidth);
// console.log(window.innerHeight);

/* 0-300
0-600
600-screenwidth*/
if (window.innerWidth < 300) {
    console.log('Smartphone');
} else if (window.innerWidth < 600) {
    console.log('Tablet')
} else {
    console.log('PC');
}