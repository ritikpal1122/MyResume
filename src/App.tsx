import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemplatesPage from './pages/template/TemplatePage';

import ATSCheckerPage from './pages/atsChecker/ATSCheckerPage';
import { ResumeBuilder } from './components/resume-builder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template" element={<TemplatesPage />} />
        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="/ats-checker" element={<ATSCheckerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
