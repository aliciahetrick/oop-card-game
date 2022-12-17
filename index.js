////// CARD ////////

const card3spades = new Card('3', 'spades')
const card9diamonds = new Card('9', 'diamonds')
const card6clubs = new Card('6', 'clubs')
//console.log(card3spades)

////// HAND ////////

const hand = new Hand([])
// console.log(hand.addCard(card))
hand.addCard(card3spades)
hand.addCard(card9diamonds)
// console.log(hand)

let played3spades = hand.playCard(card3spades)
console.log(played3spades)
console.log(hand)

////// DECK ////////

let deck = new Deck()
console.log(deck.generateCards())
