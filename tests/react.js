import React from 'React';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import MyNavbar from '../src/components/MyNavbar';

describe('React component unit tests', () => {
  describe('Navbar', () => {
    let text;
    beforeEach(() => {
      text = render(<MyNavbar />);
    })

    it('should render the word CodeAid', () => {
      expect(text.getByText(/CodeAid/)).toBeTruthy();
    });

    it('should pass a snapshot test', () => {
      expect(text.getByText(/CodeAid/)).toMatchSnapshot();
    });
  })
})