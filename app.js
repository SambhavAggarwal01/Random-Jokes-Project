const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async() => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        displayData(response);
    } catch (error) {
        console.log(error);
    }
});

/*
btn.addEventListener('click', () => {
    fetch(url)
        .then((data) => data.json())
        .then(response => displayData(response))
        .catch((err) => console.log(err));
});

This is the functionality obtained by using the fetch property
which returns the promise property and we are simply utilising that 
Promise return Property

But as above we replaced it with even more clearner code with async/await
*/

/*
The fetch property eliminates the need to use the above function
And Replaces the code that we would use in our button event listener, i.e.,:

btn.addEventListener('click', () => {
getData(url)
.then((response) => displayData(response))
.catch((err) => console.log(err) );
}

# fetch is provided by the browser & it returns a Promise

});
*/

/*
function getData(url) {

    return new Promise((resolve,reject) => {
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4)
            return;
        if (xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject({
                status: xhr.status,
                text = xhr.statusText,
            });
        }
    }
}
*/

function displayData({ value: joke }) {
    img.classList.add('shake-img');

    content.textContent = joke;

    const random = Math.random() * 1000;
    setTimeout(() => {
        img.classList.remove('shake-img');
    }, random);
}