import { useRef } from 'react'
const DealerHand = (props) => {
    const hiddenCard = useRef(null);
    const dealerCards = document.querySelectorAll('.dealerCards');
    if(!props.turn && props.gameHasEnded){
        dealerCards.forEach(item=>item.classList.add('revealCard'));
    }
    return (
        <>
            <div className='dealerHand'>
                {props.hasGameStarted ? props.dealerHand.map(card =>
                    <div className='dealerCardCon' key={card.id}>
                        <img 
                        className='dealerCards'
                        ref={hiddenCard} 
                        src={card.src} 
                        alt='card' />
                    </div>) : null}

            </div>

        </>
    )
}

export default DealerHand;