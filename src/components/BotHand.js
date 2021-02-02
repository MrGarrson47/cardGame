
const BotHand = (props) => {

    return (
        <>

            <div>
                <div className='playerHand'>
                    {props.hasGameStarted ? props.botHand.map(card =>
                        <div key={card.id}>
                            <img src={card.src} alt='card' />
                        </div>) : null}
                </div>
                <div>

                </div>
            </div>

        </>
    )
}

export default BotHand;