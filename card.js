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
    this.arrOfCards.push(card)
    return this.arrOfCards
  }

  playCard(card) {
    let removedCard = []
    if (this.arrOfCards.includes(card)) {
      for (let i = 0; i < this.arrOfCards.length; i++) {
        if (this.arrOfCards[i] === card) {
          removedCard.push(this.arrOfCards[i])
          this.arrOfCards.splice(this.arrOfCards[i], 1)
        }
      }
    } else {
      return null
    }

    return removedCard
  }
}

const card3spades = new Card('3', 'spades')
const card9diamonds = new Card('9', 'diamonds')
const card6clubs = new Card('6', 'clubs')
//console.log(card3spades)

const hand = new Hand([])
// console.log(hand.addCard(card))
hand.addCard(card3spades)
hand.addCard(card9diamonds)
// console.log(hand)

let played3spades = hand.playCard(card3spades)
console.log(played3spades)
console.log(hand)

// play card to remove from hand
