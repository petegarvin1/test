import React from 'react';
import { render} from '@testing-library/react';
import Header from '../header/header';

test('renders header', () => {
    render(<Header title={"test"} center={true}/>);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});