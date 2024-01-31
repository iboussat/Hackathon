let colorButtons =
    `<div class = "colorButton">
<button type = "button" class = "btnRed">RED</button>
<button type = "button" class = "btnGreen">GREEN</button>
<button type = "button" class = "btnBG1">Background Image</button>
<button type = "button" class = "btnChangeName">Change Name!</button>
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
    bodyDiv.style.backgroundColor = 'red';
});

let greenButton = document.querySelector('.btnGreen');
greenButton.addEventListener('click', (e) => {
    const bodyDiv = document.querySelector('body');
    bodyDiv.style.backgroundImage = 'none';
    bodyDiv.style.backgroundColor = 'green';
});

let bgButton_1 = document.querySelector('.btnBG1');
bgButton_1.addEventListener('click', (e) => {
    const bodyDiv = document.querySelector('body');
    bodyDiv.style.backgroundImage = 'url("https://media.istockphoto.com/id/1314054062/vector/abstract-simply-background-with-natural-line-arts.jpg?s=612x612&w=0&k=20&c=QtBb0IP9iQISX0jsNVdOgbX7VCrCfXWpA9uUMd9c4q4=")';
});


let changeName = document.querySelector('.btnChangeName');
changeName.addEventListener('click', (e) => {
    const googleImage = document.querySelector('.lnXdpd');

    if(googleImage){
        googleImage.remove();
    }
    // googleImage.remove();
    let centerSpot = document.querySelector('.k1zIA');

    fetch('https://api.quotable.io/random')
    .then(data => data.json())
    .then(quote => {
        centerSpot.innerHTML = quote.content;
        console.log(quote)
    });

    //centerSpot.innerHTML = "Smile Everyday! :)";
    centerSpot.style.paddingTop = '1rem';
});



