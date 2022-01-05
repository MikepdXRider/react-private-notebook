import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NoteList from './NoteList';

it('should display a list of notes', () => {
  const { container } = render(
    <MemoryRouter>
      <NoteList notes={[{ id: 1, title: 'Test note' }]} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
  screen.getByText(/Test note/);
});

it('should call the delete function when clicked', () => {
  const mockDelete = jest.fn();
  render(
    <MemoryRouter>
      <NoteList
        notes={[{ id: 1, title: 'Test note' }]}
        onDeleteNote={mockDelete}
      />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: 'Delete Test note' }));
});
