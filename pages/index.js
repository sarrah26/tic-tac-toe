// pages/index.js
import { useState } from 'react';
import TicTacToe from '../components/TicTacToe';
import GameModeSelection from '../components/GameModeSelection';
import styles from '../components/TicTacToe.module.css';

export default function Home() {
  const [gameMode, setGameMode] = useState(null);

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
  };

  return (
    <div className={styles.container}>
      <GameModeSelection selectedMode={gameMode} setGameMode={handleGameModeChange} />
      {gameMode && (
        <TicTacToe gameMode={gameMode} />
      )}
    </div>
  );
}
