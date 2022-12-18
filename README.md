## Phase 1: Base classes

Write the following three classes. Remember that each class should have a constructor that initializes the properties. Some classes might also have methods that you will need to implement. Be sure to use this when referring to a property or method.

- [x] Card
      Write a Card class with two properties: rank and suit.

- [x] Hand
      A Hand has one property: an array of cards.
      addCard(card) will add the given card to the hand.
      playCard(card) will remove and return the specified card from the hand. It should return null if the card is not in the hand.

- [x] Deck
      A Deck has an array of possible card ranks, an array of possible card suits, and an array of cards. - [x] generateCards() will populate the deck with an initial array of cards. - [x] shuffleCards() will shuffle the cards in the deck. Search online for a shuffle function. You do not need to come up with this yourself. - [x] draw() will remove and return a card from the deck. - [x] deal(numHands, cardsPerHand) will deal cardsPerHand cards to numHands hands.

///////////////////////////////////////////////////////////////////////

## Phase 2: Game mechanics

You will be implementing the logic for a card game of your choice. Some examples of games are:

Uno
Poker
Bridge
Mahjong
Trading Card Games

The additional features that you write will depend on which game you chose. Some examples of possible features are:

different ranks and suits
more Card properties
more actions in Hand or Deck

Once you have decided on a game:

Write a Game class that manages the Deck, Hands, and Cards.
Update Deck, Hand, and Card classes as needed.

Work on small parts at a time and check in with an instructor frequently. This is a big project and it can be easy to get overwhelmed.

Here are some prompts for getting started:
Keep track of the Deck in Game.
Does your game keep track of discards?
Can Hands interact with each other?
Deal out hands and keep track of them in Game.
What happens on a player's turn?
When does a player win or lose?

///////////////////////////////////////////////////////////////////////

## Phase 3: The DOM

In this phase, you will be working on visually representing the Game.

If there are elements that are always on the screen, then they should be coded into your HTML. This might include buttons, containers, instructions, etc.

There will also be elements that are dynamic, such as the cards in each player's hand or in the deck. One way to implement dynamic elements is a render function in your Game class.

An example of what render might do is:
Select the container element.
Use loops and document.createElement to create a new element for each Card.
Replace the container's children with the generated elements.

Here are some milestones to hit:
Every card in the Deck is visible on the screen.
Every card in each Hand is visible on the screen.
A "Deal" button will deal the cards when it is pressed.
A "Draw" button adds a card to the next player's hand.
A "Reset" button resets the Game to an initial state.
What other mechanics does your game have?

Get as far as you can. You will find that as you work on one feature, it might break another feature, or you might have an idea for something else that you want to implement. Keep working on it.
