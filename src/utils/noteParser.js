import { parseDate } from './dateParser';

export const parseNote = (note) => ({
  id: note.id,
  title: note.title,
  content: note.content,
  userId: note.user_id,
  createdAt: parseDate(note.created_at),
  updatedAt: parseDate(note.updated_at),
});

export const parseNotes = (notes) => notes.map(parseNote);
