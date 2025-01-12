import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  RedirectToSignIn, useUser } from '@clerk/clerk-react';

import HomePage from './pages/HomePage';
import TemplatesPage from './pages/template/TemplatePage';
import ATSCheckerPage from './pages/atsChecker/ATSCheckerPage';
import { ResumeBuilder } from './components/resume-builder';
import SigninPage from './routes/sign-in';
import SignupPage from './routes/sign-up';

// A private route wrapper for routes requiring authentication
function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        
        {/* Private Routes */}
        <Route
          path="/template"
          element={
            <PrivateRoute>
              <TemplatesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/builder"
          element={
            <PrivateRoute>
              <ResumeBuilder />
            </PrivateRoute>
          }
        />
        <Route
          path="/ats-checker"
          element={
            <PrivateRoute>
              <ATSCheckerPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
