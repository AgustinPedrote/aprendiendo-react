import { useState } from 'react'
import confetti from 'canvas-confetti' /* npm install canvas-confetti -E */

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner } from './logic/board.js'
import { Winner } from './components/Winner.jsx'

// Componente principal App
function App() {
  // Estado del tablero con 9 casillas vacías
  const [board, setBoard] = useState(Array(9).fill(null))

  // Estado para llevar el turno actual
  const [turn, setTurn] = useState(TURNS.X)

  // Estado para guardar al ganador (null si no hay ganador y false si hay empate)
  const [winner, setWinner] = useState(null)

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // Función para actualizar el tablero
  const updateBoard = (index) => {
    // Si la casilla ya está ocupada, no hacemos nada
    if (board[index] !== null || winner !== null) {
      return
    }

    // Actualizamos el tablero
    const newBoard = [...board] // Las props y el estado son siempre inmutables
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Verificamos si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner !== null) {
      confetti() // Lanzamos los confettis
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }


  // Renderizamos el componente principal
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}>Reiniciar el juego</button>

      {/* Tablero del juego */}
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      {/* Indicador del turno actual */}
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <Winner resetGame={resetGame} winner={winner} /> {/* Componente Winner */}
    </main>
  )
}

export default App
