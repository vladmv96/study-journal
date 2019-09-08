import React from 'react';
import '../styles/App.css';
import TeacherMainPage from './teacher/TeacherMainPage';
import StudentMainPage from './student/StudentMainPage';

function App() {
  return (
    <div className='App'>
      {/* <TeacherMainPage /> */}
      <StudentMainPage />
    </div>
  );
}

export default App;
