import React from 'react';
import HomeworksPage from './HomeworksPage';
import '../../styles/SubjectPage.css';

function SubjectPage({
    cardId
}) {

    return (
        <div className='subjectPage'>
            <h1>Математика</h1>
            <h2>Id: {cardId}</h2>
            <HomeworksPage />
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;