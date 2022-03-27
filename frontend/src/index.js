import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextProvider>
 </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
