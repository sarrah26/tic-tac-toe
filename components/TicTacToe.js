// components/TicTacToe.js
import { useState, useEffect } from 'react';
import AiMove from './AiMove';
import SecondPlayerMove from './SecondPlayerMove';
import MatchOver from './MatchOver';
import ResetButton from './ResetButton';
import styles from './TicTacToe.module.css';

const initialBoard = Array(9).fill(null);

function TicTacToe({ gameMode }) {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  useEffect(() => {
    if (gameMode === 'AI' && !isXNext) {
      aiMove();
    }
  }, [board, isXNext, gameMode]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const aiMove = () => {
    const emptyIndices = board.map((value, index) => value === null ? index : -1).filter(index => index !== -1);
    if (emptyIndices.length === 0) return;

    // Simple AI: Random move
    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = board.slice();
    newBoard[randomIndex] = 'O';
    setBoard(newBoard);
    setIsXNext(true);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  useEffect(() => {
    const currentWinner = calculateWinner(board);
    if (currentWinner) {
      setWinner(currentWinner);
    } else if (board.every(square => square)) {
      setWinner({ winner: 'Draw' });
    }
  }, [board]);

  useEffect(() => {
    if (winner) {
      const line = calculateWinningLine(board);
      setWinningLine(line);
    }
  }, [winner]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const calculateWinningLine = (squares) => {
    const result = calculateWinner(squares);
    return result ? result.line : [];
  };

  return (
    <div className={styles.gameContainer}>
      <MatchOver winner={winner} winningLine={winningLine} />
      <div className={styles.board}>
        {board.map((value, index) => (
          <button
            key={index}
            className={`${styles.square} ${winningLine.includes(index) ? styles.winningSquare : ''}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      {gameMode === 'AI' ? (
        <AiMove board={board} isXNext={isXNext} setBoard={setBoard} setIsXNext={setIsXNext} />
      ) : (
        <SecondPlayerMove board={board} isXNext={isXNext} setBoard={setBoard} setIsXNext={setIsXNext} />
      )}
      <ResetButton resetGame={resetGame} />
    </div>
  );
}

export default TicTacToe;
