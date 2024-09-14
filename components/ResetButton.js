// components/ResetButton.js
import styles from './TicTacToe.module.css';

const ResetButton = ({ resetGame }) => {
  return (
    <button className={styles.resetButton} onClick={resetGame}>
      Reset Game
    </button>
  );
};

export default ResetButton;
