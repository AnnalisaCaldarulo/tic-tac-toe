import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player" symbol="X" />
          <Player initialName="Player 2" symbol="0" />
        </ol>
      </div>

      GAME BOARD
    </main>
  );
}

export default App
