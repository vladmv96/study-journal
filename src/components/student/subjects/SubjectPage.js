import React from 'react';
import HomeworkContainer from '../homework/HomeworkContainer';
import 'styles/student/SubjectPage.scss';

function SubjectPage({
    subjectId,
    subject
}) {

    return (
        <div className='subjectPage'>
            <div className='subjectTitle'>{subject.subjectTitle}</div>
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