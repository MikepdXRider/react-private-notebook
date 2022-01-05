import { Link } from 'react-router-dom';
import { useNoteFromPath } from '../../hooks/useNoteFromPath';

export default function Breadcrumbs({ className }) {
  const { currentNote, isEditing } = useNoteFromPath();

  const renderCurrentNote = (linkifyTitle) => {
    if (linkifyTitle) {
      return (
        <span>
          {' '}
          &raquo;{' '}
          <Link to={`/notes/${currentNote.id}`}>{currentNote.title}</Link>{' '}
          &raquo; Edit
        </span>
      );
    } else {
      return <span> &raquo; {currentNote.title}</span>;
    }
  };

  return (
    <nav className={className}>
      <Link to="/notes">Notebook</Link>
      {currentNote?.title && renderCurrentNote(isEditing)}
    </nav>
  );
}
