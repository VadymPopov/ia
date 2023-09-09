import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from 'context/AppProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
