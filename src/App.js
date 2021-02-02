import GameOptions from './components/GameOptions'
import './App.css';
import GameWindow from './components/GameWindow';
import { useState, useEffect } from 'react'
import Cards from './components/Cards'

function App() {
  const [cardBase, setCardBase] = useState(Cards);
  const [currentDeck, setCurrentDeck] = useState([...Cards]);

  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [bot1Hand, setBot1Hand] = useState([]);
  const [bot2Hand, setBot2Hand] = useState([]);
  const [playerHandValue, setPlayerHandValue] = useState(0);
  const [dealerHandValue, setDealerHandValue] = useState(0);
  const [bot1HandValue, setBot1HandValue] = useState(0);
  const [bot2HandValue, setBot2HandValue] = useState(0);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [turn, setTurn] = useState(true);
  const [gameHasEnded, setGameHasEnded] = useState(false);
  const [playerBet, setPlayerBet] = useState(5);
  const [playerCash, setPlayerCash] = useState(1000);

  useEffect(() => {
    getPlayerHandValue();
    getDealerHandValue();
    getBot1HandValue();
    getBot2HandValue();
  })
  // bot1 will count the remaining cards in the deck and calculate the chance to draw a single card needed to reach 21. 
  const handleBot1Choice = (isPlayerBust) => {
    let playerIsBust = isPlayerBust;
    let deckCurrent = [...currentDeck];
    let bot1HandCurrent = [...bot1Hand];
    let ranNum1 = getRanNum();
    let bot1HandValueCurrent = bot1HandValue;
    if (bot1HandValueCurrent <= 11) {
      bot1HandCurrent.push(deckCurrent[ranNum1]);
      deckCurrent.splice(deckCurrent.indexOf(deckCurrent[ranNum1]), 1);
    }
    // variables to handle looking for single card to reach 21
    bot1HandValueCurrent = 0;
    bot1HandCurrent.forEach(item => bot1HandValueCurrent = bot1HandValueCurrent + item.value);
    let currentAnyCardChance = 1 / deckCurrent.length * 100;
    let singleCardValueNeeded = 21 - bot1HandValueCurrent;
    let singleCardsNeededRemaining = deckCurrent.filter(item => item.value === singleCardValueNeeded);
    // variables to handle looking at single card to bust
    let singleCardsBustRemaining = deckCurrent.filter(item => item.value > singleCardValueNeeded);
    let singleCardsBustRemainingChance = currentAnyCardChance * singleCardsBustRemaining.length;
    //********************* need to think about passing in the current deck length into getRanNum, might be returning undefined index based on outdated deck length */
    while (singleCardsBustRemainingChance < 60) {
      ranNum1 = getRanNumUpdated(deckCurrent);
      bot1HandCurrent.push(deckCurrent[ranNum1]);
      deckCurrent.splice(deckCurrent.indexOf(deckCurrent[ranNum1]), 1);

      bot1HandValueCurrent = 0;
      bot1HandCurrent.forEach(item => bot1HandValueCurrent = bot1HandValueCurrent + item.value);
      currentAnyCardChance = 1 / deckCurrent.length * 100;
      singleCardValueNeeded = 21 - bot1HandValueCurrent;
      singleCardsNeededRemaining = deckCurrent.filter(item => item.value === singleCardValueNeeded);
      // variables to handle looking at single card to bust
      singleCardsBustRemaining = deckCurrent.filter(item => item.value > singleCardValueNeeded);
      singleCardsBustRemainingChance = currentAnyCardChance * singleCardsBustRemaining.length;
    }
    setCurrentDeck(deckCurrent);
    setBot1Hand(bot1HandCurrent);
    if (bot1HandValueCurrent > 21) {
      let bot1IsBust = true;
      handleDealerChoice(playerIsBust, bot1IsBust);
    }
    else {
      let bot1IsBust = false;
      handleDealerChoice(playerIsBust, bot1IsBust);
    }

    setGameHasEnded(true);

  }
  // bot2 will count the remaining cards in the deck and calculate the chance to draw a single card needed to reach 21. 
  const handleBot2Choice = (isPlayerBust) => {
    let playerIsBust = isPlayerBust;
    let deckCurrent = [...currentDeck];
    let bot2HandCurrent = [...bot2Hand];
    let ranNum1 = getRanNum();
    let bot2HandValueCurrent = bot2HandValue;
    if (bot2HandValueCurrent <= 11) {
      bot2HandCurrent.push(deckCurrent[ranNum1]);
      deckCurrent.splice(deckCurrent.indexOf(deckCurrent[ranNum1]), 1);
    }
    // variables to handle looking for single card to reach 21
    bot2HandValueCurrent = 0;
    bot2HandCurrent.forEach(item => bot2HandValueCurrent = bot2HandValueCurrent + item.value);
    let currentAnyCardChance = 1 / deckCurrent.length * 100;
    let singleCardValueNeeded = 21 - bot2HandValueCurrent;
    let singleCardsNeededRemaining = deckCurrent.filter(item => item.value === singleCardValueNeeded);
    // variables to handle looking at single card to bust
    let singleCardsBustRemaining = deckCurrent.filter(item => item.value > singleCardValueNeeded);
    let singleCardsBustRemainingChance = currentAnyCardChance * singleCardsBustRemaining.length;
    //********************* need to think about passing in the current deck length into getRanNum, might be returning undefined index based on outdated deck length */
    while (singleCardsBustRemainingChance < 50) {
      ranNum1 = getRanNumUpdated(deckCurrent);
      bot2HandCurrent.push(deckCurrent[ranNum1]);
      deckCurrent.splice(deckCurrent.indexOf(deckCurrent[ranNum1]), 1);

      bot2HandValueCurrent = 0;
      bot2HandCurrent.forEach(item => bot2HandValueCurrent = bot2HandValueCurrent + item.value);
      currentAnyCardChance = 1 / deckCurrent.length * 100;
      singleCardValueNeeded = 21 - bot2HandValueCurrent;
      singleCardsNeededRemaining = deckCurrent.filter(item => item.value === singleCardValueNeeded);
      // variables to handle looking at single card to bust
      singleCardsBustRemaining = deckCurrent.filter(item => item.value > singleCardValueNeeded);
      singleCardsBustRemainingChance = currentAnyCardChance * singleCardsBustRemaining.length;
    }
    setCurrentDeck(deckCurrent);
    setBot2Hand(bot2HandCurrent);
    if (bot2HandValueCurrent > 21) {
      let bot2IsBust = true;
      handleDealerChoice(playerIsBust, bot2IsBust);
    }
    else {
      let bot2IsBust = false;
      handleDealerChoice(playerIsBust, bot2IsBust);
    }

    setGameHasEnded(true);

  }

  //if the dealer's hand value is below 17 then adds another card to the dealer's hand
  const handleDealerChoice = (playerIsBust, bot1IsBust, bot2IsBust) => {//****************************************** */
    let dealerHandValueCurrent = dealerHandValue;
    let dealerHandCurrent = [...dealerHand];
    let deckCurrent = [...currentDeck];
    let value = 0;
    if (!playerIsBust || !bot1IsBust || !bot2IsBust) {
      while (dealerHandValueCurrent < 17) {
        let card1 = getRanNumUpdated(deckCurrent);
        dealerHandCurrent.push(deckCurrent[card1]);
        deckCurrent.splice(card1, 1);
        dealerHandValueCurrent = 0;
        dealerHandCurrent.forEach(item => dealerHandValueCurrent = dealerHandValueCurrent + item.value);
      }
      setDealerHandValue(value)
      setDealerHand(dealerHandCurrent);
      setCurrentDeck(deckCurrent);
      setGameHasEnded(true);
    }
    if (dealerHandValueCurrent < 22 && dealerHandValueCurrent < playerHandValue && !playerIsBust) {
      setPlayerCash(playerCash + (playerBet * 2));
      console.log(`condition one : dealer Hand ${dealerHandValueCurrent}, player Hand : ${playerHandValue}`);
    }
    else if (dealerHandValueCurrent > 21 && !playerIsBust) {
      setPlayerCash(playerCash + (playerBet * 2));
      console.log(`condition three : dealer Hand ${dealerHandValueCurrent}, player Hand : ${playerHandValue}`);
    }
    else if (dealerHandValueCurrent < 22 && !playerIsBust && dealerHandValueCurrent === playerHandValue) {
      setPlayerCash(playerCash + playerBet);
      console.log(`condition two : dealer Hand ${dealerHandValueCurrent}, player Hand : ${playerHandValue}`);
    }
  }
  const handleBet = (e) => {
    setPlayerBet(parseInt(e.target.value))
  }
  const resetGame = () => {
    setPlayerHandValue(0);
    setDealerHandValue(0);
    setBot1HandValue(0);
    setBot2HandValue(0);
    setPlayerHand([]);
    setDealerHand([]);
    setBot1Hand([]);
    setBot2Hand([]);
    setCurrentDeck([...cardBase]);
    setHasGameStarted(false);
    setGameHasEnded(false);
    setTurn(true);
    setPlayerBet(5);
  }
  //deals two cards to each bot, the player and the dealer, takes player's bet
  const initialDeal = () => {
    setHasGameStarted(true);
    dealCardDealer();
    dealCardPlayer();
    dealCardBot1();
    dealCardBot2();
    setPlayerCash(playerCash - playerBet);
  }
  //hit option of the player
  const playerHit = () => {
    let cardIndex1 = getRanNum();
    let chosenCard1 = currentDeck[cardIndex1];
    setPlayerHand([...playerHand, chosenCard1]);
    currentDeck.splice(cardIndex1, 1);
    let playerHandCurrent = [...playerHand, chosenCard1];
    let playerHandValueCurrent = 0;
    playerHandCurrent.forEach(item => playerHandValueCurrent += item.value);
    if (playerHandValueCurrent > 21) {
      let playerIsBust = true;
      setGameHasEnded(true);
      handleBot1Choice(playerIsBust);//***********************NEED TO MAKE SURE TO MAKE A CONDITION FOR THE DEALER HITTING BASED ON IF PLAYERS ARE STILL IN THE GAME! */
      handleBot2Choice(playerIsBust);//***********************NEED TO MAKE SURE TO MAKE A CONDITION FOR THE DEALER HITTING BASED ON IF PLAYERS ARE STILL IN THE GAME! */
      setTurn(false);
    }
  }
  //stand option of the player
  const playerStand = () => {
    setTurn(false);
    handleBot1Choice();
    handleBot2Choice();
    //handleDealerChoice(); moved this function call into handleBot1Choice(), at present need to call it from the last bot's move.
  }
  const getDealerHandValue = () => {
    let value = 0;
    dealerHand.forEach(card => value = value + card.value);
    setDealerHandValue(value);
  }
  const getPlayerHandValue = () => {
    let value = 0;
    playerHand.forEach(card => value = value + card.value);
    setPlayerHandValue(value);
  }
  const getBot1HandValue = () => {
    let value = 0;
    bot1Hand.forEach(card => value = value + card.value);
    setBot1HandValue(value);
  }
  const getBot2HandValue = () => {
    let value = 0;
    bot2Hand.forEach(card => value = value + card.value);
    setBot2HandValue(value);
  }
  //used in initialDeal to deal two random cards to the dealer
  const dealCardDealer = () => {
    let cardIndex1 = getRanNum();
    let cardIndex2 = getRanNum();
    while (cardIndex1 === cardIndex2) {
      cardIndex2 = getRanNum();
    }
    let chosenCard1 = currentDeck[cardIndex1];
    let chosenCard2 = currentDeck[cardIndex2];
    setDealerHand([...dealerHand, chosenCard1, chosenCard2]);
    if (cardIndex1 > cardIndex2) {
      currentDeck.splice(cardIndex1, 1);
      currentDeck.splice(cardIndex2, 1);
    }
    else {
      currentDeck.splice(cardIndex2, 1);
      currentDeck.splice(cardIndex1, 1);
    }
    getDealerHandValue();
  }
  //used in initialDeal to deal two random cards to the player
  const dealCardPlayer = () => {
    let cardIndex1 = getRanNum();
    let cardIndex2 = getRanNum();
    while (cardIndex1 === cardIndex2) {
      cardIndex2 = getRanNum();
    }
    let chosenCard1 = currentDeck[cardIndex1];
    let chosenCard2 = currentDeck[cardIndex2];
    setPlayerHand([...playerHand, chosenCard1, chosenCard2]);
    if (cardIndex1 > cardIndex2) {
      currentDeck.splice(cardIndex1, 1);
      currentDeck.splice(cardIndex2, 1);
    }
    else {
      currentDeck.splice(cardIndex2, 1);
      currentDeck.splice(cardIndex1, 1);
    }
    getPlayerHandValue();
  }
  //used in initialDeal to deal two random cards to bot1
  const dealCardBot1 = () => {
    let cardIndex1 = getRanNum();
    let cardIndex2 = getRanNum();
    while (cardIndex1 === cardIndex2) {
      cardIndex2 = getRanNum();
    }
    let chosenCard1 = currentDeck[cardIndex1];
    let chosenCard2 = currentDeck[cardIndex2];
    setBot1Hand([...bot1Hand, chosenCard1, chosenCard2]);
    if (cardIndex1 > cardIndex2) {
      currentDeck.splice(cardIndex1, 1);
      currentDeck.splice(cardIndex2, 1);
    }
    else {
      currentDeck.splice(cardIndex2, 1);
      currentDeck.splice(cardIndex1, 1);
    }
    getBot1HandValue();
  }
  const dealCardBot2 = () => {
    let cardIndex1 = getRanNum();
    let cardIndex2 = getRanNum();
    while (cardIndex1 === cardIndex2) {
      cardIndex2 = getRanNum();
    }
    let chosenCard1 = currentDeck[cardIndex1];
    let chosenCard2 = currentDeck[cardIndex2];
    setBot2Hand([...bot2Hand, chosenCard1, chosenCard2]);
    if (cardIndex1 > cardIndex2) {
      currentDeck.splice(cardIndex1, 1);
      currentDeck.splice(cardIndex2, 1);
    }
    else {
      currentDeck.splice(cardIndex2, 1);
      currentDeck.splice(cardIndex1, 1);
    }
    getBot2HandValue();
  }

  const getRanNum = () => {
    let ranNum1 = Math.floor(Math.random() * currentDeck.length);
    return ranNum1;
  }
  const getRanNumUpdated = (currentDeck) => {
    let ranNum1 = Math.floor(Math.random() * currentDeck.length);
    return ranNum1;
  }

  return (
    <div className="App">
      <GameOptions
        playerCash={playerCash}
        playerBet={playerBet}
        handleBet={handleBet}
        initialDeal={initialDeal}
        resetGame={resetGame}
        hasGameStarted={hasGameStarted} />
      <GameWindow
        setPlayerCash={setPlayerCash}
        playerCash={playerCash}
        playerBet={playerBet}
        gameHasEnded={gameHasEnded}
        playerHand={playerHand}
        dealerHand={dealerHand}
        playerHandValue={playerHandValue}
        dealerHandValue={dealerHandValue}
        hasGameStarted={hasGameStarted}
        turn={turn}
        playerStand={playerStand}
        playerHit={playerHit}
        dealCardDealer={dealCardDealer}
        setDealerHand={setDealerHand}
        currentDeck={currentDeck}
        bot1Hand={bot1Hand}
        bot1HandValue={bot1HandValue}
        bot2Hand={bot2Hand}
        bot2HandValue={bot2HandValue}
      />
    </div>
  );
}

export default App;
