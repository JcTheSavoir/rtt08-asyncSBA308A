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
    const cardName = document.querySelector('.midImageTitle');
    const cardImage = document.querySelector('.midImageItself');
    const cardDescription = document.querySelector('.midImageTextContainer');

    const randomResponse = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
    console.log(randomResponse);
    const jsonData = await randomResponse.json();
    console.log(jsonData);
    cardName.innerHTML = jsonData.name;
    const url = jsonData.card_images[0].image_url;
    cardImage.setAttribute('src', url);
    cardDescription.innerHTML = jsonData.desc;
}
