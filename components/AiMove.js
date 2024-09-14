// components/AiMove.js
import { useEffect } from 'react';

const AiMove = ({ board, isXNext, setBoard, setIsXNext }) => {
  useEffect(() => {
    if (!isXNext) {
      const emptyIndices = board.map((value, index) => value === null ? index : -1).filter(index => index !== -1);
      if (emptyIndices.length === 0) return;

      // Simple AI: Random move
      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      const newBoard = board.slice();
      newBoard[randomIndex] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }
  }, [board, isXNext, setBoard, setIsXNext]);

  return null;
};

export default AiMove;
