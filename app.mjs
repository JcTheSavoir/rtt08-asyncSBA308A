//-------------{import section}--------------
import { randomCardGetter } from "./jsModulesSBA308A/exportDataTwo.mjs"

//-------------{Initialized functions}----------
// allCardNames()
randomCardGetter()

//--------------{declaration of DOM elements and dom manipulation}------------
const randomButton = document.querySelector('#randomCardButton');
// const userEnteredInput = document.querySelector('#cardSearchInput')
// const searchButton = document.querySelector('#cardSearchButton');

//--------------{dom manipulation}------------
//--{random button}--
const randomCardEvent = () => {
    randomCardGetter();
}
randomButton.addEventListener('click', randomCardEvent);

    //--{search button}---
// const checkforNameEvent = () => {
//     const enteredName = userEnteredInput.value; 
//     console.log(enteredName)
// };
// searchButton.addEventListener('click', checkforNameEvent)
