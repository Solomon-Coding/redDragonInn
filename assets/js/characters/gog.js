// Each of the cards in the char deck will follow 
// the following format with the exception of the 
// back of the card: 0-card sprite, 1-card title, 
// 2-card description, 3-card type, 4-action function

const gogCards = {
    cardBack:null,
    card1:[,"","","",],
    card2:[,"","","",],
    card3:[,"","","",],
    card4:[,"","","",],
    card5:[,"","","",],
    card6:[,"","","",],
    card7:[,"","","",],
    card8:[,"","","",],
    card9:[,"","","",],
    card10:[,"","","",],
    card11:[,"","","",],
    card12:[,"","","",],
    card13:[,"","","",],
    card14:[,"","","",],
    card15:[,"","","",],
    card16:[,"","","",],
    card17:[,"","","",],
    card18:[,"","","",],
    card19:[,"","","",],
    card20:[,"","","",],
    card21:[,"","","",],
    card22:[,"","","",],
    card23:[,"","","",],
    card24:[,"","","",],
    card25:[,"","","",],
    card26:[,"","","",],
    card27:[,"","","",],
    card28:[,"","","",],
    card29:[,"","","",],
    card30:[,"","","",],
    card31:[,"","","",],
    card32:[,"","","",],
    card33:[,"","","",],
    card34:[,"","","",],
    card35:[,"","","",],
    card36:[,"","","",],
    card37:[,"","","",],
    card38:[,"","","",],
    card39:[,"","","",],
    card40:[,"","","",],
}

// This object will hold all the key attributes of the 
// character

var charGog = {
    name:"Gog",
    charCardF:[null,""],
    charCardB:[null,""],
    cards:gogCards,
    fortitude:20,
    alcoholContent:0,
    effects:null,
}

console.log(charGog.cards.card19[1])

