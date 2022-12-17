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

//////////////////////////

class Deck {
  constructor(arrOfRanks, arrOfSuits, arrOfCards) {
    this.arrOfRanks = arrOfRanks
    this.arrOfSuits = arrOfSuits
    this.arrOfCards = arrOfCards
  }
  generateCards() {
    //populate the deck with an initial array of cards
  }
}
