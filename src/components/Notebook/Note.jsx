import { Link } from 'react-router-dom';
import styles from './Note.css';

export default function Note({ note }) {
  return (
    <article>
      <h2>{note.title}</h2>
      <p className={styles.subtitle}>
        Created {note.createdAt}
        {note.updatedAt && <span> — Last updated {note.updatedAt}</span>}
      </p>
      <Link to={`/notes/${note.id}/edit`}>
        <button>Edit</button>
      </Link>
      <hr />
      <p>{note.content}</p>
    </article>
  );
}
