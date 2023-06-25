import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './StartPage';
import LoginPage from './LoginPage';
import LessonPage from './LessonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lesson" element={<LessonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
