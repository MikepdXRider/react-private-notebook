import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNotes } from '../../context/NoteContext';
import NoteForm from '../../components/Notebook/NoteForm';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function EditNote() {
  const { id } = useParams();
  const { notes, getNote, updateNote } = useNotes();
  const [note, setNote] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!notes.loading) setNote(getNote(id));
  }, [notes.loading, id]);

  const handleEditNote = async ({ title, content }) => {
    await updateNote({ id, title, content });
    if (notes.error) {
      setMessage(notes.error);
    } else {
      setMessage('Note updated successfully!');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div>
      <NoteForm
        title={note?.title}
        content={note?.content}
        formLabel="Edit Note"
        onSubmit={handleEditNote}
      />
      {message && <p>{message}</p>}
    </div>
  );
}
