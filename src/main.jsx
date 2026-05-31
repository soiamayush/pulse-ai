import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LeadsProvider } from './context/LeadsContext';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LeadsProvider>
        <App />
      </LeadsProvider>
    </BrowserRouter>
  </StrictMode>
);
