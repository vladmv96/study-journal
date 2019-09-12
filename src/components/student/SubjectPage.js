import React from 'react';
import HomeworksPage from './HomeworksPage';
import '../../styles/SubjectPage.css';

function SubjectPage({
    subjectId,
    homeworksList,
    subject
}) {

    return (
        <div className='subjectPage'>
            <h1>Математика</h1>
            <h2>Id: {subjectId}</h2>
            <HomeworksPage
                subjectId={subjectId}
                homeworksList={homeworksList[subjectId]}
                teacherName={subject.teacherName}
                />
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;