import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";


function App() {
  const [activePlayer, setActivePlayer] = useState('X');  

  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevGameTurn) => {
      let currentPlayerUpdate = 'X';
      if(prevGameTurn.length > 0 && prevGameTurn[0].player === 'X') {
        currentPlayerUpdate = 'O';
      }

      const updatedTurns = [{square : {row : rowIndex, col: colIndex}, player: currentPlayerUpdate},
         ...prevGameTurn];

      return updatedTurns;  
    })
  }


  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol= "X" isActive={activePlayer === 'X'}/>
            <Player initialName="Player 2" symbol= "O" isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns}/>
      </main> 
  )
}

export default App
