import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Global, css } from "@emotion/react";
import StartPage from './StartPage';
import LoginPage from './LoginPage';
import LessonPage from './LessonPage';

function App() {
  return (
    <Router>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            overflow-x: hidden;
          }
        `}
      />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lesson" element={<LessonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
