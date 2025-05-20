import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AutismQuestionsPage from './AutismQuestionsPage';
import LoginPage from './LoginPage';
import { AuthProvider } from './contexts/AuthContext';
import RequireAuth from './Components/RequireAuth'; // ✅ Adjust path if your folder is capitalized
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<App />} />

          {/* Protected route */}
          <Route
            path="/autism-test"
            element={
              <RequireAuth>
                <AutismQuestionsPage />
              </RequireAuth>
            }
          />

          {/* Public login route */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
