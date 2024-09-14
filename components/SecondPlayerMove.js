// components/SecondPlayerMove.js
import { useEffect } from 'react';

const SecondPlayerMove = ({ board, isXNext, setBoard, setIsXNext }) => {
  useEffect(() => {
    // The second player is effectively another human player, so no automatic logic is needed here.
    // This file can be empty or used for more complex second player interactions if needed.
  }, [board, isXNext, setBoard, setIsXNext]);

  return null;
};

export default SecondPlayerMove;
