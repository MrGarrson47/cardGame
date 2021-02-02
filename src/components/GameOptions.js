
const GameOption = (props) => {
    return (
        <>
            <div className='gameOptions'>
                <div>
                    <label>Player Cash : {props.playerCash}</label>
                </div>
                {!props.hasGameStarted && 
                <div>
                    <label>Bet</label>
                    <select 
                    value={props.playerBet}
                    onChange={(e)=>props.handleBet(e)}
                    >
                        <option>5</option>
                        <option>20</option>
                        <option>100</option>
                    </select>
                </div>
               }
                {!props.hasGameStarted &&
                    <button
                        onClick={() => props.initialDeal()}
                    >Start</button>}

                <button
                    onClick={() => props.resetGame()}
                >Reset</button>
            </div>
        </>
    )
}

export default GameOption;