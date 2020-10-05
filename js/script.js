const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText = 'Wait a little bit.';
    factDiv.innerHTML = loadText;
    const baseURL = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
    fetch(baseURL + number, {
        method: "GET",
        headers:{
            'x-requested-with': 'text/plain'
        }})
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text);
})

const jokeBTN = document.querySelector('.jokeBTN');
const dadJoke = document.querySelector('.dad-joke');
document.addEventListener('DOMContentLoaded', getJoke);

jokeBTN.addEventListener('click', getJoke);
function getJoke(){
    fetch ('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then (data => data.json())
    .then(b => dadJoke.innerHTML = b.joke)
}
