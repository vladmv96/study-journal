import React from 'react';
import HomeworkContainer from './HomeworkContainer';

function SubjectPage({
    subjectId,
    homeworksList,
    subject
}) {

    return (
        <div className='subjectPage'>
            <h1>Математика</h1>
            <h2>Id: {subjectId}</h2>
            <HomeworkContainer
                subjectId={subjectId}
                homeworksList={homeworksList[subjectId]}
                teacherName={subject.teacherName}
                />
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;