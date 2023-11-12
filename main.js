const apiKey = 'EbO0VbTKcIXYduWtxAN70g==935naWGL7jfs7qd0';

const $submitBtn = document.querySelector('.js-submit');
const $apiOptions = document.querySelector('#apiOptions');

const callData = (type) => {
    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${type}`, {
            method: 'GET',

            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())

        .then(data => {

            const exercises =
                data
                .map(data => `<li><strong>${data.name}</strong> :(${data.difficulty }) ${data.instructions}</li><br>`)
                .join('');
            document.querySelector('.js-class').innerHTML = exercises;
        });

}

$submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const selectedOption = $apiOptions.value;
    callData(selectedOption);

});