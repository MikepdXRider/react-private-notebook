import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NoteProvider } from '../../context/NoteContext';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

jest.mock('../../context/UserContext');
jest.mock('../../context/NoteContext');
jest.mock('../../services/users');

it('should display a header with breadcrumbs when signed out', () => {
  const { container } = render(
    <UserProvider>
      <NoteProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </NoteProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});

it('should display the user’s email when signed in', () => {
  const { container } = render(
    <UserProvider mockUser={{ id: 1, email: 'test@example.com' }}>
      <NoteProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </NoteProvider>
    </UserProvider>
  );
  screen.getByText('test@example.com', { exact: false });
  expect(container).toMatchSnapshot();
});
