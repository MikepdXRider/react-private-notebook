import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  createNote,
  deleteNoteById,
  getNotes,
  updateNoteById,
} from '../services/notes';
import { parseNote, parseNotes } from '../utils/noteParser';
import { useUser } from './UserContext';

// payload is a note object:
// { title: String, content: String }
function notesReducer(notes, { type, payload }) {
  switch (type) {
    case 'create':
      return [payload, ...notes];
    case 'reset':
      return [...payload];
    case 'update':
      return notes.map((note) => (note.id === payload.id ? payload : note));
    case 'delete':
      return notes.filter((note) => note.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notesStore, dispatch] = useReducer(notesReducer, []);
  const { user } = useUser();

  useEffect(() => {
    const fetchNotes = async () => {
      if (user.id) {
        const notes = await getNotes();
        dispatch({
          type: 'reset',
          payload: parseNotes(notes),
        });
        setLoading(false);
      }
    };
    fetchNotes();
  }, [user?.id]);

  const addNote = async ({ title, content }) => {
    setLoading(true);
    try {
      const [note] = await createNote({ userId: user.id, title, content });
      const payload = parseNote(note);
      dispatch({ type: 'create', payload });
      return payload;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getNote = (id) => {
    return notesStore.find((note) => note.id === Number(id));
  };

  const updateNote = async ({ id, title, content }) => {
    setLoading(true);
    try {
      const [note] = await updateNoteById(id, { title, content });
      const payload = parseNote(note);
      dispatch({ type: 'update', payload });
      return parseNote(payload);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    setLoading(true);
    try {
      const [note] = await deleteNoteById(id);
      dispatch({ type: 'delete', payload: { id: note.id } });
      return parseNote(note);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes: { loading, error, data: notesStore },
        addNote,
        getNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }

  return context;
};

export { NoteProvider, useNotes };
