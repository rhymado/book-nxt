import styles from "../styles/Card.module.css";

function Card({ title, author, genre, onClickHandler }) {
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <section className={styles.title}>{title}</section>
      <section className={styles.author}>{author}</section>
      <section className={styles.genre}>{genre}</section>
    </div>
  );
}

export default Card;
