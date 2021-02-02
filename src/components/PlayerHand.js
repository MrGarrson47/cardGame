
const PlayerHand = (props) => {

    return (
        <>

            <div>
                <div className='playerHand'>
                    {props.hasGameStarted ? props.playerHand.map(card =>
                        <div key={card.id}>
                            <img src={card.src} alt='card' />
                        </div>) : null}
                </div>
                <div>
                    <div className='betCon'>
                        <h1>{props.playerBet}</h1>
                    </div>
                    {props.hasGameStarted && props.turn && props.playerHandValue < 22 ?
                        <div className='playerOptions'>
                            <button
                                onClick={() => props.playerHit()}
                            >Hit</button>
                            <button
                                onClick={() => props.playerStand()}
                            >Stand</button>
                        </div>
                        : null}

                </div>
            </div>

        </>
    )
}

export default PlayerHand;