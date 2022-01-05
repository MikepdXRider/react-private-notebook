import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Note from './Note';

it('should display the provided note', () => {
  const { container } = render(
    <MemoryRouter>
      <Note
        note={{
          id: 'id',
          title: 'title',
          content: 'content',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }}
      />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
