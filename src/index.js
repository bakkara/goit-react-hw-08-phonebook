import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'theme';

Modal.setAppElement('#root'); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
          </BrowserRouter>
        </PersistGate>
      <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
