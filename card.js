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

    for (let i = 0; i < this.arrOfRanks.length; i++) {
      //console.log(this.arrOfRanks[i])
      let row = []
      row.push(this.arrOfRanks)
      console.log(row)
      for (let j = 0; i < this.arrOfSuits.length; j++) {
        // console.log(this.arrOfSuits[j])
      }
    }

    //populate the deck with an initial array of cards
  }
}
