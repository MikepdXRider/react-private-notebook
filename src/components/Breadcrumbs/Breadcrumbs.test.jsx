import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NoteProvider } from '../../context/NoteContext';
import { UserProvider } from '../../context/UserContext';
import Breadcrumbs from './Breadcrumbs';

jest.mock('../../context/UserContext');
jest.mock('../../context/NoteContext');

it('should display a link to the Notebook by default', () => {
  const { container } = render(
    <UserProvider>
      <NoteProvider>
        <MemoryRouter>
          <Breadcrumbs />
        </MemoryRouter>
      </NoteProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});

it('should display the current note’s title when viewing a note', () => {
  const { container } = render(
    <UserProvider mockUser={{ id: 1, email: 'test@example.com' }}>
      <NoteProvider mockNotes={[{ id: 1, title: 'Test Note!' }]}>
        <MemoryRouter initialEntries={['/notes/1']}>
          <Breadcrumbs />
        </MemoryRouter>
      </NoteProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});

it('should display "Edit" when editing a note', () => {
  const { container } = render(
    <UserProvider mockUser={{ id: 1, email: 'test@example.com' }}>
      <NoteProvider mockNotes={[{ id: 1, title: 'Test Note!' }]}>
        <MemoryRouter initialEntries={['/notes/1/edit']}>
          <Breadcrumbs />
        </MemoryRouter>
      </NoteProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
