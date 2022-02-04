import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react'
import Button from '../Button';

it('renders withouth crashing', () => {
    const div = document.createElement('div')
    render(<Button />, div);
});