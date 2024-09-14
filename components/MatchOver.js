// components/MatchOver.js
import styles from './TicTacToe.module.css';

const MatchOver = ({ winner, winningLine }) => {
  if (!winner) return null;

  return (
    <div className={styles.status}>
      {winner.winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner.winner}`}
    </div>
  );
};

export default MatchOver;
