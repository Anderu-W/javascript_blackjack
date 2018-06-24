const cards = require('./cards');

function BlackJack(playerIds, deck) {
    this.deck = (deck == null ? new cards.BuildDeck() : deck);
    this.dealer = {};
    this.players = {};
    this.value = function(hand) {
        // TODO: Finds value of 'hand' object passed, and returns total.
        // Hand object has format [{card1},{card2}] where card is {"Rank":"value","Suit":"value"}
        total = 0;
        for (i = 0; i < hand.length; i++) {
            if (hand[i]['Rank'] == 'Ace') {
                total = ((total + 11) < 21 ? total += 11 : total += 1);
            } else {
                total = total + (['King', 'Queen', 'Jack'].contains(hand[i]['Rank']) ? total += 10 : parseInt(hand[i]['Rank'], 10));
            }
        }
        return total;
    };
    this.winner = function() {
        // TODO: Evaluates all hands to find winner of game, then return winner ID, else return false
    };
    let i = 0;
    while (i < playerIds.length) {
        this.players[playerIds[i]] = [];
        this.players[playerIds[i]] = this.players[playerIds[i]].concat(this.deck.carddraw(2));
        i = i + 1;
    }
}
exports.cards = cards;
exports.BlackJack = BlackJack;
