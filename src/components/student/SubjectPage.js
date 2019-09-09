import React from 'react';
import HomeworksPage from './HomeworksPage';
import '../../styles/SubjectPage.css';

function SubjectPage({
    subjectId,
    homeworksList
}) {

    return (
        <div className='subjectPage'>
            <h1>Математика</h1>
            <h2>Id: {subjectId}</h2>
            <HomeworksPage
                subjectId={subjectId}
                homeworksList={homeworksList}
                />
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;