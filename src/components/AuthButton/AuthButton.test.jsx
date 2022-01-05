import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import AuthButton from './AuthButton';

jest.mock('../../context/UserContext');
jest.mock('../../services/users');

it('should display a "sign in" button when user is logged out', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <AuthButton />
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        href="/login"
      >
        <button>
          Sign In
        </button>
      </a>
    </div>
  `);
});

it('should display a "sign out" button when user is logged in', () => {
  const { container } = render(
    <UserProvider mockUser={{ id: 1, email: 'test.user@example.com' }}>
      <MemoryRouter>
        <AuthButton />
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button>
        Sign Out
      </button>
    </div>
  `);
});
