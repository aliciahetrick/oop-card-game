class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }
}

////////////////////////////

class Hand {
  constructor(arrOfCards) {
    this.arrOfCards = arrOfCards
  }

  addCard(card) {
    card + this.arrOfCards
  }

  playCard(card) {}
}

const hand = new Hand(['4', 'hearts'])
console.log(hand.addCard('5', 'diamonds'))
