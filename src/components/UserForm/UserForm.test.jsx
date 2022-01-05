import { fireEvent, render, screen } from '@testing-library/react';
import UserForm from './UserForm';

it('should display a form for signing up/in', () => {
  const { container } = render(<UserForm />);
  expect(container).toMatchSnapshot();
});
