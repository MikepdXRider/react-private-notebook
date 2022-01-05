import { useState } from 'react';
import { useNotes } from '../../context/NoteContext';
import NoteList from '../../components/Notebook/NoteList';
import Loading from '../../components/Loading/Loading';
import NoteForm from '../../components/Notebook/NoteForm';

import styles from './Notebook.css';

export default function Notebook() {
  const { notes, addNote, deleteNote } = useNotes();
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddNote = async (note) => {
    await addNote(note);
    setFormVisible(false);
  };

  const handleDeleteNote = async (note) => {
    if (confirm(`Are you sure you want to delete "${note.title}"?`))
      await deleteNote(note.id);
  };

  return (
    <>
      <h2>Notebook</h2>
      {notes.loading && <Loading />}
      {notes.data.length > 0 ? (
        <NoteList notes={notes.data} onDeleteNote={handleDeleteNote} />
      ) : (
        !notes.loading && <p>It's time to write a note!</p>
      )}
      <button onClick={() => setFormVisible((prevState) => !prevState)}>
        {isFormVisible ? 'Cancel' : 'Add Note'}
      </button>
      {isFormVisible && (
        <NoteForm
          className={styles.addNoteForm}
          formLabel="Add Note"
          onSubmit={handleAddNote}
        />
      )}
    </>
  );
}
