// Definimos los turnos posibles para el juego
export const TURNS = {
    X: '❌', // Emoji de X
    O: '⭕'  // Emoji de O
}


export const WINNER_COMBOS = [
    [0, 1, 2], // Horizontal superior
    [3, 4, 5], // Horizontal media
    [6, 7, 8], // Horizontal inferior
    [0, 3, 6], // Vertical izquierda
    [1, 4, 7], // Vertical media
    [2, 5, 8], // Vertical derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundaria
]