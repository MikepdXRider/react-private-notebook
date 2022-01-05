import styles from './Loading.css';

function Loading() {
  return (
    <div className={styles.ellipsis} aria-label="loading">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
export default Loading;
