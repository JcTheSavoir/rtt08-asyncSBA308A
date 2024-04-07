//-------------{import section}--------------
import { allCardNames, randomCardGetter } from "/jsModulesSBA308A/exportDataTwo.mjs"


//-------------{Initialized functions}----------

// allCardNames()
// randomCardGetter()


//--------------{declaration of DOM elements and dom manipulation}------------
const userEnteredInput = document.querySelector('#cardSearchInput')
const searchButton = document.querySelector('#cardSearchButton');
const randomButton = document.querySelector('#randomCardButton');
console.log(userEnteredInput)
console.log(searchButton)
console.log(randomButton)

//--------------{dom manipulation}------------
    //--{search button}---
// const checkforNameEvent = () => {
//     const enteredName = userEnteredInput.value; 
//     console.log(enteredName)
// };
// searchButton.addEventListener('click', checkforNameEvent)

    //--{random button}--
const randomCardEvent = () => {
    randomCardGetter();
}
randomButton.addEventListener('click', randomCardEvent);