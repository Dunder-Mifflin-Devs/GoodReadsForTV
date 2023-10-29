import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientID = import.meta.env.VITE_VERCEL_GOOGLE_CLIENT_ID


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);