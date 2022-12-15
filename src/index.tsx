import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './containers/AppContainer';
import './index.css';
import reportWebVitals from './reportWebVitals';

import orderBook  from './slicers/orderBookSlicer'

const store = configureStore({
  reducer: {
    orderBook: orderBook.reducer,
  }
});

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
