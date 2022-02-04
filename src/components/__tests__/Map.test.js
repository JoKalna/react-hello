import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react'
import Map from '../Map';

it('renders withouth crashing', () => {
    const div = document.createElement('div')
    render(<Map />, div);
});

it('contains an image', ()=> {
    render(<Map/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'default.jpg');
  
})