import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NoteForm from './NoteForm';

it('should display an empty form when no props provided', () => {
  const { container } = render(
    <MemoryRouter>
      <NoteForm />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});

it('should display a form using the props provided as values', () => {
  const note = {
    title: 'Test Note',
    content: 'This is my note',
  };
  const mockSubmit = jest.fn();

  const { container } = render(
    <MemoryRouter>
      <NoteForm
        formLabel="Test Note Form"
        className="my-class-name"
        onSubmit={mockSubmit}
        {...note}
      />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();

  fireEvent.click(screen.getByRole('button'));
  expect(mockSubmit).toBeCalledTimes(1);
});
