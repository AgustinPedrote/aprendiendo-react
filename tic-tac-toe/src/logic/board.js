import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToCheck) => {
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

// Función para verificar si el juego ha terminado
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}