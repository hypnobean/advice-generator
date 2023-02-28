const adviceText = document.querySelector('.advice-text');
const adviceNumber = document.querySelector('#advice-number')
const api_url = 'https://api.adviceslip.com/advice';


async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    show(data);
}

getapi(api_url);

function show(data) {
    adviceNumber.innerHTML = 'Advice #' + data.slip.id
    adviceText.innerHTML = '"' + data.slip.advice + '"'
}