import React from 'react';
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store";
import {positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

// Use createRoot instead of ReactDOM.render
const ReactRoot = createRoot(document.getElementById('root'));

// Wrap app with Provider and AlertProvider
ReactRoot.render(
//ReactDOM.render(  
  <Provider store = {store}>
  <AlertProvider template={AlertTemplate} {...options}>
  <React.StrictMode>
        <App />
      </React.StrictMode>
  </AlertProvider>
  </Provider>
  
);
