import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Global, css } from "@emotion/react";
import StartPage from './StartPage';
import LoginPage from './LoginPage';
import LessonPage from './LessonPages/LessonPage';
import LessonOne from './LessonPages/Lesson1';
import LessonTwo from './LessonPages/Lesson2';
import LessonThree from './LessonPages/Lesson3';
import LessonFour from './LessonPages/Lesson4';
import SignUp from './SignUp';

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/lesson1" element={<LessonOne />}></Route>
        <Route path="/lesson2" element={<LessonTwo />}></Route>
        <Route path="/lesson3" element={<LessonThree />}></Route>
        <Route path="/lesson4" element={<LessonFour />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
