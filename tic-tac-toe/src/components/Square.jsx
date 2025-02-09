// Componente Square que representa cada casilla del tablero
export const Square = ({ children, isSelected, updateBoard, index }) => {
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