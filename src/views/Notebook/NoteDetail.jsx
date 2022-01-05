import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Note from '../../components/Notebook/Note';
import { useNotes } from '../../context/NoteContext';

export default function NoteDetail() {
  const { id } = useParams();
  const { notes, getNote } = useNotes();
  const [note, setNote] = useState({});

  useEffect(() => {
    if (!notes.loading) setNote(getNote(id));
  }, [notes.loading, id]);

  return (
    <>
      {notes.loading && <Loading />}
      {note?.id && <Note note={note} />}
    </>
  );
}
