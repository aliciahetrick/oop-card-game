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
    this.arrOfRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    this.arrOfSuits = [' of Hearts', ' of Diamonds', ' of Spades', ' of Clubs']
    // this.arrofCards =

    let allCards = []
    for (const rank of this.arrOfRanks) {
      allCards.push(rank + this.arrOfSuits[0])
      allCards.push(rank + this.arrOfSuits[1])
      allCards.push(rank + this.arrOfSuits[2])
      allCards.push(rank + this.arrOfSuits[3])
    }
    return allCards
  }
}
