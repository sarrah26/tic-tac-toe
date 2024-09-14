// components/GameModeSelection.js
import styles from './TicTacToe.module.css';

const GameModeSelection = ({ selectedMode, setGameMode }) => {
  return (
    <div className={styles.gameModeSelection}>
      <h2>Select Game Mode</h2>
      <button
        className={`${styles.modeButton} ${selectedMode === 'AI' ? styles.selectedMode : ''}`}
        onClick={() => setGameMode('AI')}
      >
        Play against AI
      </button>
      <button
        className={`${styles.modeButton} ${selectedMode === '2P' ? styles.selectedMode : ''}`}
        onClick={() => setGameMode('2P')}
      >
        Play with Second Player
      </button>
    </div>
  );
};

export default GameModeSelection;
