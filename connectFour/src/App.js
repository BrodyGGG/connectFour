import {useState} from "react";

//Square Component 
function Square({value, onSquareClick }){
    const className = `square${(value === "X" ? "x" : value ==="O" ? "o" : "")}`
    return (
        <button 
        className={className}
        onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    //playerX = true
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(42).fill(null));
    
    function handleClick(i) {
        if(squares[i]  || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice(); 
        if (xIsNext) {
            while(!nextSquares[i + 7] && i + 7 < 42){
                i += 7;
            }
            nextSquares[i] = "X";        
        }
        else {
            while(!nextSquares[i + 7] && i+ 7 < 42){
                i += 7;
            }
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    //winner or next player
    const winner = calculateWinner(squares);
    let status;
    if (winner){
        status = "Winner: " + winner;
    }
    else if (!squares.includes(null)){
        status = "Tie Game!"
    }
    else {
        status = (xIsNext ? "X" : "O") + "'s turn!";
    }
    return ( 
        <>  
            <div className="header"><h2>Connect Four!</h2></div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
                <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>
                <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
            </div>
            <div className="board-row">
                <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
                <Square value={squares[9]} onSquareClick = {() => handleClick(9)}/>
                <Square value={squares[10]} onSquareClick = {() => handleClick(10)}/>
                <Square value={squares[11]} onSquareClick = {() => handleClick(11)}/>
                <Square value={squares[12]} onSquareClick = {() => handleClick(12)}/>
                <Square value={squares[13]} onSquareClick = {() => handleClick(13)}/>
            </div>
            <div className="board-row">

                <Square value={squares[14]} onSquareClick = {() => handleClick(14)}/>
                <Square value={squares[15]} onSquareClick = {() => handleClick(15)}/>
                <Square value={squares[16]} onSquareClick = {() => handleClick(16)}/>
                <Square value={squares[17]} onSquareClick = {() => handleClick(17)}/>
                <Square value={squares[18]} onSquareClick = {() => handleClick(18)}/>
                <Square value={squares[19]} onSquareClick = {() => handleClick(19)}/>
                <Square value={squares[20]} onSquareClick = {() => handleClick(20)}/>
            </div>
            <div className="board-row">

                <Square value={squares[21]} onSquareClick = {() => handleClick(21)}/>
                <Square value={squares[22]} onSquareClick = {() => handleClick(22)}/>
                <Square value={squares[23]} onSquareClick = {() => handleClick(23)}/>
                <Square value={squares[24]} onSquareClick = {() => handleClick(24)}/>
                <Square value={squares[25]} onSquareClick = {() => handleClick(25)}/>
                <Square value={squares[26]} onSquareClick = {() => handleClick(26)}/>
                <Square value={squares[27]} onSquareClick = {() => handleClick(27)}/>
            </div>
            <div className="board-row">

                <Square value={squares[28]} onSquareClick = {() => handleClick(28)}/>
                <Square value={squares[29]} onSquareClick = {() => handleClick(29)}/>
                <Square value={squares[30]} onSquareClick = {() => handleClick(30)}/>
                <Square value={squares[31]} onSquareClick = {() => handleClick(31)}/>
                <Square value={squares[32]} onSquareClick = {() => handleClick(32)}/>
                <Square value={squares[33]} onSquareClick = {() => handleClick(33)}/>
                <Square value={squares[34]} onSquareClick = {() => handleClick(34)}/>
            </div>
            <div className="board-row">

                <Square value={squares[35]} onSquareClick = {() => handleClick(35)}/>
                <Square value={squares[36]} onSquareClick = {() => handleClick(36)}/>
                <Square value={squares[37]} onSquareClick = {() => handleClick(37)}/>
                <Square value={squares[38]} onSquareClick = {() => handleClick(38)}/>
                <Square value={squares[39]} onSquareClick = {() => handleClick(39)}/>
                <Square value={squares[40]} onSquareClick = {() => handleClick(40)}/>
                <Square value={squares[41]} onSquareClick = {() => handleClick(41)}/>
            </div>
            <div className="status">{status}</div>
        </>
    );
}

function calculateWinner(squares){
    const winningLines = [        
    // Horizontal
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
    [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
    [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
    [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
    [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],

    // Vertical
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
    [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
    [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
    [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
    [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
    [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
    [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],

    // Diagonal
    [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39], [0, 8, 16, 24],
    [8, 16, 24, 32], [16, 24, 32, 40], [1, 9, 17, 25], [9, 17, 25, 33],
    [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [3, 11, 19, 27],
    
    // Diagonal
    [3, 9, 15, 21], [4, 10, 16, 22], [10, 16, 22, 28], [5, 11, 17, 23],
    [11, 17, 23, 29], [17, 23, 29, 35], [6, 12, 18, 24], [12, 18, 24, 30],
    [18, 24, 30, 36], [13, 19, 25, 31], [19, 25, 31, 37], [20, 26, 32, 38]
];

for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c, d] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
        return squares[a];
    }
}
return null;
}