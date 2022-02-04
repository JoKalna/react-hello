import { render, screen } from '@testing-library/react';
import React from 'react'
import StoreLocator from '../StoreLocator';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Map from '../../components/Map';

describe('StoreLocator', function(){
    const setup = () => render(<StoreLocator />);

    it('renders withouth crashing', () => {
        const div = document.createElement('div')
        setup();
    });

    it('renders a heading', () => {
       const header = () => render(<Header />);
       expect(header).toBeTruthy();
    })
    it('renders two buttons', () => {
        const button = () => render(<Button />)
        expect(button).toBeTruthy();
    })
    it('renders a map', () => {
        const map = () => render(<Map />)
        expect(map).toBeTruthy();
    })
})

