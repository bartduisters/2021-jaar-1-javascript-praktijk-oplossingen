const h1El = document.querySelector('h1');
console.log(h1El.innerText); // 'Dit is opdracht 2'

const tweedeH2El = document.querySelectorAll('h2')[1];
console.log(tweedeH2El.innerText); // 'Een tweede subtitel'

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    console.log(paragraph.innerText);
    // De eerste iteratie print dit uit: 'Een paragraaf'
    // De tweede iteratie print dit uit: 'Een tweede paragraaf'
})

const tweedeLiUitUl = document.querySelector('ul').querySelectorAll('li')[1];
console.log(tweedeLiUitUl.innerText); // 'Two'

const laatsteLiUitOl = document.querySelector('ol').querySelectorAll('li')[4];
console.log(laatsteLiUitOl.innerText); // 'Vijf'