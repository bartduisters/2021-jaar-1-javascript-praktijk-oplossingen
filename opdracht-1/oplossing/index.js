/*
* Zorg ervoor dat index.html hetzelfde resultaat geeft als resultaat.html.
* Controleren of de opdracht correct is:
* - Bekijk resultaat.html via Live Server
* - Bekijk index.html via Live Server
*
* De pagina's moeten identiek zijn.
*/

const bodyEl = document.querySelector('body');

const h1El = document.createElement('h1');
h1El.innerText = 'Dit is een titel';
bodyEl.appendChild(h1El);

const pEl = document.createElement('p');
pEl.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque error vero et atque pariatur velit aspernatur eos reiciendis necessitatibus. Ipsam id aut dolorem quisquam itaque sint, deleniti assumenda, dolor voluptates laborum dignissimos vero voluptatum dicta officiis qui natus commodi excepturi. Quod natus nisi dignissimos maiores nostrum illum dolorum nam!'
bodyEl.appendChild(pEl);

const h2El = document.createElement('h2');
h2El.innerText = 'Dit is een subtitel';
h2El.id = 'unique';
bodyEl.appendChild(h2El);

const secondP2El = document.createElement('p');
secondP2El.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus quasi perferendis minima amet vero dolore facilis ab culpa sunt!'
secondP2El.classList.add('special');
secondP2El.classList.add('paragraph');
bodyEl.appendChild(secondP2El);