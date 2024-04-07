//-------------{import section}--------------
import { allCardNames, randomCardGetter } from "/jsModulesSBA308A/exportDataTwo.mjs"


//-------------{Initialized functions}----------

// allCardNames()
randomCardGetter()
// const typeTitle = document.querySelector('.typeStatistic').children[0]
// const typeDescription = document.querySelector('.typeStatistic').children[2]
// console.log(typeTitle)
// console.log(typeDescription)

// const attributeTitle = document.querySelector('.attributeStatistic').children[0]
// const attributeDescription = document.querySelector('.attributeStatistic').children[2]
// console.log(attributeTitle)
// console.log(attributeDescription)

// const levelOrRankTitle = document.querySelector('.levelOrRankStatistic').children[0]
// const levelOrRankDescription = document.querySelector('.levelOrRankStatistic').children[2]
// console.log(levelOrRankTitle)
// console.log(levelOrRankDescription)

// const attackTitle = document.querySelector('.attackStatistic').children[0]
// const attackDescription = document.querySelector('.attackStatistic').children[2]
// console.log(attackTitle)
// console.log(attackDescription)

// const defenceTitle = document.querySelector('.defenceStatistic').children[0]
// const defenceDescription = document.querySelector('.defenceStatistic').children[2]
// console.log(defenceTitle)
// console.log(defenceDescription)

// const linkTitle = document.querySelector('.linkStatistic').children[0]
// const linkDescription = document.querySelector('.linkStatistic').children[2]
// console.log(typeTitle)
// console.log(typeDescription)

// const archetypeTitle = document.querySelector('.archetypeStatistic').children[0]
// const archetypeDescription = document.querySelector('.archetypeStatistic').children[2]
// console.log(archetypeTitle)
// console.log(archetypeDescription)

// const tcgReleaseTitle = document.querySelector('.tcgReleaseStatistic').children[0]
// const tcgReleaseDescription = document.querySelector('.tcgReleaseStatistic').children[2]
// console.log(tcgReleaseTitle)
// console.log(tcgReleaseDescription)

// const ocgReleaseTitle = document.querySelector('.ocgReleaseStatistic').children[0]
// const ocgReleaseDescription = document.querySelector('.ocgReleaseStatistic').children[2]
// console.log(ocgReleaseTitle)
// console.log(ocgReleaseDescription)

//--------------{declaration of DOM elements and dom manipulation}------------
const userEnteredInput = document.querySelector('#cardSearchInput')
const searchButton = document.querySelector('#cardSearchButton');
const randomButton = document.querySelector('#randomCardButton');
// console.log(userEnteredInput)
// console.log(searchButton)
// console.log(randomButton)

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