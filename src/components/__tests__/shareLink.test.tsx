import React from 'react';
import { render} from '@testing-library/react';
import ShareLink from '../shareLink/shareLink';

test('renders shareLink', () => {
  render(<ShareLink link={"test"}/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});