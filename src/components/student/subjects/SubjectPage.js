import React from 'react';
import HomeworkContainer from '../homework/HomeworkContainer';

function SubjectPage({
    subjectId,
    subject
}) {

    return (
        <div className='subjectPage'>
            <h1>{subject.subjectTitle}</h1>
            <h2>Id: {subjectId}</h2>
            {subject.homework &&
                <HomeworkContainer
                    subjectHomeworksList={subject.homework}
                    teacherName={subject.teacherName}
                />
            }
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;