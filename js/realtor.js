let colorButtons =
    `<div class = "colorButton">
<button type = "button" class = "btnRed">RED</button>
<button type = "button" class = "btnGreen">GREEN</button>
<button type = "button" class = "btnBG1">Background Image</button>
<button type = "button" class = "btnChangeName">Something Special!</button>
</div>`;

const buttonPosition = document.querySelector('body')


// create buttons
if (buttonPosition !== null) {
    buttonPosition.innerHTML += colorButtons;
};

let redButton = document.querySelector('.btnRed');
redButton.addEventListener('click', (e) => {
    const bodyDiv = document.querySelector('body');
    bodyDiv.style.backgroundImage = 'none';
    bodyDiv.style.backgroundImage = 'linear-gradient(pink, red)';
});


let greenButton = document.querySelector('.btnGreen');
greenButton.addEventListener('click', (e) => {
    const bodyDiv = document.querySelector('body');
    bodyDiv.style.backgroundImage = 'none';
    bodyDiv.style.backgroundImage = 'linear-gradient(green, white)';
});

let bgButton_1 = document.querySelector('.btnBG1');
bgButton_1.addEventListener('click', (e) => {
    const bodyDiv = document.querySelector('body');
    bodyDiv.style.backgroundSize = 'cover'

    fetch('https://source.unsplash.com/random')
    .then(image => {
        bodyDiv.style.backgroundImage = `url(${image.url})`;
        console.log('imgurl', image)
    });
});


let changeName = document.querySelector('.btnChangeName');
changeName.addEventListener('click', (e) => {
    const googleImage = document.querySelector('.lnXdpd');

    if(googleImage){
        googleImage.remove();
    }

    let centerSpot = document.querySelector('.k1zIA');

    fetch('https://api.quotable.io/random')
    .then(data => data.json())
    .then(quote => {
        centerSpot.innerHTML = quote.content;
        console.log('quote', quote)
    });

    centerSpot.style.backgroundImage = 'linear-gradient(rgb(239, 220, 46), rgb(109, 109, 177))'
    centerSpot.style.width = '100%'
});



