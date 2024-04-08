//----------{to be used for the search function}----------
export const allCardNames = async () => {
    let allNames = []
    const cardResponse = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    // console.log(cardResponse)
    const jsonData = await cardResponse.json();
    // console.log(jsonData)
    await jsonData.data.forEach(obj => {
        const nameAtObject = obj.name
        const addNames = allNames.push(nameAtObject)
    })
}

//-----------{gets random card from api}-----------
export const randomCardGetter = async () => {
    const cardName = document.querySelector('.midCardTitle');
    const cardImage = document.querySelector('.midCardImage');
    const cardDescription = document.querySelector('.midCardText');

    const randomResponse = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
    // console.log(randomResponse);
    const jsonData = await randomResponse.json();
    console.log(jsonData);
    // console.log(jsonData.name);
    cardName.innerHTML = jsonData.name;
    // console.log(jsonData.desc)
    const url = jsonData.card_images[0].image_url;
    // console.log(url)
    cardImage.setAttribute('src', url);
    cardDescription.innerText = jsonData.desc;
    randomCardAttributes(jsonData)
}

//Query selecting all attributes needed for card types
const randomCardAttributes = async (json) => {
    document.querySelector('.typeStatistic').style.display = 'none'
    document.querySelector('.attributeStatistic').style.display = 'none'
    document.querySelector('.typingStatistic').style.display = 'none'
    document.querySelector('.levelOrRankStatistic').style.display = 'none'
    document.querySelector('.attackStatistic').style.display = 'none'
    document.querySelector('.defenceStatistic').style.display = 'none'
    document.querySelector('.linkStatistic').style.display = 'none'
    document.querySelector('.archetypeStatistic').style.display = 'none'    
    const typeDescription = document.querySelector('.typeStatistic').children[2]
    const attributeDescription = document.querySelector('.attributeStatistic').children[2]
    const typingDescription = document.querySelector('.typingStatistic').children[2]
    const levelOrRankDescription = document.querySelector('.levelOrRankStatistic').children[2]
    const attackDescription = document.querySelector('.attackStatistic').children[2]
    const defenceDescription = document.querySelector('.defenceStatistic').children[2]
    const linkDescription = document.querySelector('.linkStatistic').children[2]
    const archetypeDescription = document.querySelector('.archetypeStatistic').children[2]
       /* //Unable to find tcg and ocg release date in the api provided, possible separate api or special parameter 
            // const tcgReleaseDescription = document.querySelector('.tcgReleaseStatistic').children[2]    
            // const ocgReleaseDescription = document.querySelector('.ocgReleaseStatistic').children[2]
        */
    console.log('hello')
    console.log(await json)
    for (const property in json) {
        const txtProperty = json[property]
        // console.log(property)
        switch (property) {
            case 'type':
                typeDescription.innerText = `__${txtProperty}`
                document.querySelector('.typeStatistic').style.display = 'block'
                break;
            case 'attribute':
                attributeDescription.innerText = `__${txtProperty}` 
                document.querySelector('.attributeStatistic').style.display = 'block'
                break;
            case 'race':
                typingDescription.innerText = `__${txtProperty}` 
                document.querySelector('.typingStatistic').style.display = 'block'
                break;
            case 'level':
                levelOrRankDescription.innerText = `__${txtProperty}`
                document.querySelector('.levelOrRankStatistic').style.display = 'block'
                break;
            case 'atk':
                attackDescription.innerText = `__${txtProperty}`
                document.querySelector('.attackStatistic').style.display = 'block'
                break;
            case 'def':
                defenceDescription.innerText = `__${txtProperty}`
                document.querySelector('.defenceStatistic').style.display = 'block'
                break;
            case 'linkval':
                linkDescription.innerText = `__${txtProperty}`
                document.querySelector('.linkStatistic').style.display = 'block'
                break;
            case 'archetype':
                archetypeDescription.innerText = `__${txtProperty}`
                document.querySelector('.archetypeStatistic').style.display = 'block'
                break;                                                
            default:
                break;
        }

    }
}