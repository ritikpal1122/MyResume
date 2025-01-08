import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemplatesPage from './pages/template/TemplatePage';

import ATSCheckerPage from './pages/atsChecker/ATSCheckerPage';
import { ResumeBuilder } from './components/resume-builder';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <Routes>

       
        <Route path="/template" element={<TemplatesPage />} />
        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="/ats-checker" element={<ATSCheckerPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <HomePage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
