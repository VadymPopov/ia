import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from 'context/AppProvider';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename="/">
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
