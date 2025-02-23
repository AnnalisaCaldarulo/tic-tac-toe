import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./WINNING_COMBO";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  '0': 'Player 2'
}
// spostiamo qui la logica di calcolo del gameboard
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


// funzione helper per astrarre la logica: cambia il giocatore
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {

  let winner = null;
  // deriviamo da gameTurns se ci sia un vincitore o meno
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column]
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  // spostiamo qui la logica di calcolo del gameboard
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;

}

function App() {
  // gestione nomi giocatori
  const [players, setPlayers] = useState(PLAYERS);

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName //overwrite del nome del giocatore con quel simbolo specifico
      }
    });
  }
  const [gameTurns, setGameTurns] = useState([]);
  //! usiamo la helper per cambiare il giocatore corrente così da cambiare la ui dei players
  const activePlayer = deriveActivePlayer(gameTurns);
  //! creiamo la gameboard
  const gameBoard = deriveGameBoard(gameTurns);
  //!controlliamo se c'è un winner
  const winner = deriveWinner(gameBoard, players);
  // ! controlliamo se c'è un draw
  const hasDraw = gameTurns.length === 9 && !winner;


  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      //! usiamo la helper per cambiare il giocatore corrente così da aggiornare poi l'array con l'elenco dei turni
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onNameChange={handlePlayerNameChange} />
          <Player initialName={PLAYERS['0']} symbol="0" isActive={activePlayer === "0"} onNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRematch} />
        )}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
