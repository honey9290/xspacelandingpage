import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { flushOutbox } from './lib/enquiry';
import './styles.css';

/* Resend any enquiry an earlier visit could not deliver. */
flushOutbox();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
