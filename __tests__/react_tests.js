import React from 'React';
import { Provider } from 'react-redux';
import store from '../src/store';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../src/App';

import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// import reducer
import activateReducer from '../src/reducers/topicSlice';

describe('React component unit tests', () => {
  // let history;
  let user;

  beforeEach(() => {
    // history = createMemoryHistory();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    user = userEvent.setup();
  });

  describe('navbar', () => {
    test('navbar renders', () => {
      expect(screen.getByText(/CodeAid/i)).toBeInTheDocument();
    });

    test('clicking navbar renders home component', async () => {
      expect(screen.getByText(/CodeAid/i)).toBeInTheDocument();
      await user.click(screen.getByText(/CodeAid/i));
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
  });

  describe('sidebar', () => {
    test('sidebar renders', () => {
      expect(screen.getByText(/Topics/i)).toBeInTheDocument();
    });
  });
  // describe('content', () => {
  //   test('content renders', () => {
  //     expect(screen.getByText(//i)).toBeInTheDocument();
  //   });
  // });

  describe('footer', () => {
    test('footer renders', () => {
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });
});
