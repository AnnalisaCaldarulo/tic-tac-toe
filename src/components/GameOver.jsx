const GameOver = ({ winner }) => {
    return (
        <div id="game-over">
            <h2>Game over!</h2>
            {winner ?
                <p> {winner} won</p>
                :
                <p>It&apos;s a draw!</p>
            }
            <p> <button>Rematch!</button> </p>
        </div>
    )
}

export default GameOver;