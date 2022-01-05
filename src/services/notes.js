import { client, parseData } from './client';

export async function getNotes() {
  const request = await client
    .from('notes')
    .select()
    .order('created_at', { ascending: false });
  return parseData(request);
}

export async function getNoteById(id) {
  const request = await client.from('notes').select().match({ id }).single();
  return parseData(request);
}

export async function updateNoteById(id, { title, content }) {
  const request = await client
    .from('notes')
    .update({ title, content })
    .match({ id });
  return parseData(request);
}

export async function createNote({ userId, title, content }) {
  const request = await client
    .from('notes')
    .insert({ user_id: userId, title, content });
  return parseData(request);
}

export async function deleteNoteById(id) {
  const request = await client.from('notes').delete().match({ id });
  return parseData(request);
}
