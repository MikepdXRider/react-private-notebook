import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNotes } from '../context/NoteContext';

export const useNoteFromPath = () => {
  const location = useLocation();
  const { notes, getNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    const isDetailOrEdit =
      /\/notes\/?(?<noteId>\d+)\/?(?<onEditPath>edit)?\/?$/g;
    const [matches] = [...location.pathname.matchAll(isDetailOrEdit)];

    if (matches?.groups.noteId) {
      setCurrentNote(getNote(matches.groups.noteId));
    } else {
      setCurrentNote({});
    }

    if (matches?.groups.onEditPath) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [notes.loading, location.pathname]);

  return { currentNote, isEditing };
};
