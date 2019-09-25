import React, { useState } from 'react';
import 'styles/App.scss';
import StudentMainPage from './student/StudentMainPage';
import Footer from './Footer';

function App() {

  const [currentTheme,setCurrentTheme] = useState('day');

  function handleThemeChangerClick() {
    if (currentTheme === 'day') {
      setCurrentTheme('night');
    }
    else {
      setCurrentTheme('day');
    }
  }

  return (
    <div className={`App ${currentTheme}`}>
      <div 
        className ='theme-changer-button'
        onClick = {() => {handleThemeChangerClick()}}
      ></div>
      <StudentMainPage />
      <Footer />
    </div>
  );
}

export default App;
