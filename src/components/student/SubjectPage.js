import React from 'react';
import HomeworksContainer from './HomeworksContainer';

function SubjectPage({
    subjectId,
    homeworksList,
    subject
}) {

    return (
        <div className='subjectPage'>
            <h1>Математика</h1>
            <h2>Id: {subjectId}</h2>
            <HomeworksContainer
                subjectId={subjectId}
                homeworksList={homeworksList[subjectId]}
                teacherName={subject.teacherName}
                />
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;