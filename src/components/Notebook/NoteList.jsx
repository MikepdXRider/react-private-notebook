import { Link } from 'react-router-dom';
import styles from './NoteList.css';

export default function NoteList({ notes, onDeleteNote }) {
  return (
    <ul aria-label="Notes" className={styles.noteList}>
      {notes.map((note) => (
        <li className={styles.noteListItem} key={note.id}>
          <article className={styles.note}>
            <h4>
              <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h4>
            <p>
              <Link to={`/notes/${note.id}/edit`}>
                <button aria-label={`Edit ${note.title}`}>Edit</button>
              </Link>{' '}
              <button
                aria-label={`Delete ${note.title}`}
                onClick={() => onDeleteNote(note)}
              >
                Delete
              </button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
