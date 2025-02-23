import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player" symbol="X" />
          <Player initialName="Player 2" symbol="0" />
        </ol>
        <Gameboard />
      </div>
    </main>
  );
}

export default App
