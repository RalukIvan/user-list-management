import React from 'react';
import { render } from '@testing-library/react'

import { UserList } from './UserList';

test('load and displays 1 ListItem element', () => {
  const users = [{
    email: 'mail@yopmail.com',
    firstname: 'test',
    lastname: 'user',
  }]
  const { getByText, getByTestId } = render(<UserList users={users}/>);
});
