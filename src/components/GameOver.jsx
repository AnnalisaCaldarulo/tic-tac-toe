const GameOver = ({ winner }) => {
    return (
        <div id="game-over">
            <h2>Game over!</h2>
            <p> {winner} won</p>
            <p> <button>Rematch!</button> </p>
        </div>
    )
}

export default GameOver;