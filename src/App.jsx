import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? '0' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === "0"} />
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} symbol={activePlayer} />
      </div>
    </main>
  );
}

export default App
