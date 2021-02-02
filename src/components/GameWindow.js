import PlayerHand from "./PlayerHand";
import DealerHand from "./DealerHand";
import BotHand from "./BotHand";


const GameWindow = (props) => {
    return (
        <>

            <div className='gameWindow'>
                {props.gameHasEnded && props.dealerHandValue > 21 ? <h1>Dealer Goes Bust!</h1> : null}

                <DealerHand
                    gameHasEnded={props.gameHasEnded}
                    dealerHand={props.dealerHand}
                    playerHandValue={props.playerHandValue}
                    dealerHandValue={props.dealerHandValue}
                    hasGameStarted={props.hasGameStarted}
                    dealCardDealer={props.dealCardDealer}
                    turn={props.turn}
                    setDealerHand={props.setDealerHand}
                    currentDeck={props.currentDeck}
                />
                <div className='playersCon'>
                    <div>
                        {props.gameHasEnded && props.playerHandValue > 21 ? <h1>Player Goes Bust!</h1> : null}
                        {props.gameHasEnded && props.playerHandValue < 22 && props.dealerHandValue < props.playerHandValue ? <h1>Player Wins!</h1> : null}
                        {props.gameHasEnded && props.playerHandValue < 22 && props.dealerHandValue < 22 && props.dealerHandValue > props.playerHandValue ? <h1>Player Loses!</h1> : null}
                        {props.gameHasEnded && props.dealerHandValue > 21 && props.playerHandValue < 22 ? <h1>Player Wins!</h1> : null}
                        {props.gameHasEnded && props.playerHandValue === props.dealerHandValue && props.playerHandValue < 22 ? <h1>Draw!</h1> : null}
                        <PlayerHand
                            gameHasEnded={props.gameHasEnded}
                            playerHand={props.playerHand}
                            playerBet={props.playerBet}
                            playerHandValue={props.playerHandValue}
                            dealerHandValue={props.dealerHandValue}
                            hasGameStarted={props.hasGameStarted}
                            playerHit={props.playerHit}
                            playerStand={props.playerStand}
                            turn={props.turn} />
                    </div>
                    <div>
                        {props.gameHasEnded && props.bot1HandValue > 21 ? <h1>Joe Goes Bust!</h1> : null}
                        {props.gameHasEnded && props.bot1HandValue < 22 && props.dealerHandValue < props.bot1HandValue ? <h1>Joe Wins!</h1> : null}
                        {props.gameHasEnded && props.bot1HandValue < 22 && props.dealerHandValue < 22 && props.dealerHandValue > props.bot1HandValue ? <h1>Joe Loses!</h1> : null}
                        {props.gameHasEnded && props.dealerHandValue > 21 && props.bot1HandValue < 22 ? <h1>Joe Wins!</h1> : null}
                        {props.gameHasEnded && props.bot1HandValue === props.dealerHandValue && props.bot1HandValue < 22 ? <h1>Draw!</h1> : null}
                        <BotHand
                            gameHasEnded={props.gameHasEnded}
                            botHand={props.bot1Hand}
                            playerBet={props.playerBet}
                            bot1HandValue={props.bot1HandValue}
                            dealerHandValue={props.dealerHandValue}
                            hasGameStarted={props.hasGameStarted}
                            turn={props.turn} />
                    </div>
                    <div>
                        {props.gameHasEnded && props.bot2HandValue > 21 ? <h1>Billy Goes Bust!</h1> : null}
                        {props.gameHasEnded && props.bot2HandValue < 22 && props.dealerHandValue < props.bot2HandValue ? <h1>Billy Wins!</h1> : null}
                        {props.gameHasEnded && props.bot2HandValue < 22 && props.dealerHandValue < 22 && props.dealerHandValue > props.bot2HandValue ? <h1>Billy Loses!</h1> : null}
                        {props.gameHasEnded && props.dealerHandValue > 21 && props.bot2HandValue < 22 ? <h1>Billy Wins!</h1> : null}
                        {props.gameHasEnded && props.bot2HandValue === props.dealerHandValue && props.bot2HandValue < 22 ? <h1>Draw!</h1> : null}
                        <BotHand
                            gameHasEnded={props.gameHasEnded}
                            botHand={props.bot2Hand}
                            playerBet={props.playerBet}
                            bot1HandValue={props.bot1HandValue}
                            dealerHandValue={props.dealerHandValue}
                            hasGameStarted={props.hasGameStarted}
                            turn={props.turn} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default GameWindow;