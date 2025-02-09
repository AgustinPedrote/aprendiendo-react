import { Children } from 'react'
import './App.css'
import { useState } from 'react'

// Definimos los turnos posibles para el juego
const TURNS = {
  X: 'X',
  O: 'O',
}

// Componente Square que representa cada casilla del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  // Agregamos la clase 'is-selected' si la casilla está seleccionada
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2], // Horizontal superior
  [3, 4, 5], // Horizontal media
  [6, 7, 8], // Horizontal inferior
  [0, 3, 6], // Vertical izquierda
  [1, 4, 7], // Vertical media
  [2, 5, 8], // Vertical derecha
  [0, 4, 8], // Diagonal principal
  [2, 4, 6], // Diagonal secundaria
]

// Componente principal App
function App() {
  // Estado del tablero con 9 casillas vacías
  const [board, setBoard] = useState(Array(9).fill(null))

  // Estado para llevar el turno actual
  const [turn, setTurn] = useState(TURNS.X)

  // Estado para guardar al ganador (null si no hay ganador y false si hay empate)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // Iteramos sobre las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo

      if (
        // Si las casillas a, b y c no son nulas y son iguales
        boardToCheck[a] !== null &&
        boardToCheck[a] === boardToCheck[b] && //
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    return null
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
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      {/* Tablero del juego */}
      <section className='game'>
        {
          board.map((self, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
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
    </main>
  )
}

export default App
