import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { useState } from "react";
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? '0' : 'X');
    setGameTurns(prevTurns => {

      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = '0';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === "0"} />
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
