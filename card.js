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

    //creating deck of 52 cards
    let allCards = []
    for (const rank of this.arrOfRanks) {
      allCards.push(rank + this.arrOfSuits[0])
      allCards.push(rank + this.arrOfSuits[1])
      allCards.push(rank + this.arrOfSuits[2])
      allCards.push(rank + this.arrOfSuits[3])
    }
    this.arrOfCards = allCards
    return allCards
  }

  shuffleCards() {
    let allCardsArr = this.generateCards()
    const shuffledArray = allCardsArr.sort(() => 0.5 - Math.random())
    return shuffledArray
  }

  draw() {
    //will remove and return a card from the deck.
    let shuffledCards = this.shuffleCards()
    let removedCard = shuffledCards.shift()
    return removedCard
  }

  deal(numHands, cardsPerHand) {
    let rows = []
    for (let i = 0; i < numHands; i++) {
      rows.push(this.draw())
      for (let j = 0; j < cardsPerHand - 1; j++) {
        rows.push(this.draw())
      }
    }
    let dealHands = [
      [rows[0], rows[1], rows[2]],
      [rows[3], rows[4], rows[5]],
    ]
    return dealHands
  }
}
