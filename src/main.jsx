import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </BrowserRouter>
);
