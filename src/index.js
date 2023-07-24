// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myWallReducer from './redux/myWallSlice';
import App from './App';

const store = configureStore({
  reducer: {
    myWall: myWallReducer,
  },
});

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
