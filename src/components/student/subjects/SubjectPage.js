import React from 'react';
import HomeworkContainer from '../homework/HomeworkContainer';

function SubjectPage({
    subjectId,
    homeworksList,
    subject
}) {

    return (
        <div className='subjectPage'>
            <h1>{subject.title}</h1>
            <h2>Id: {subjectId}</h2>
            {homeworksList && homeworksList[subjectId] &&
                <HomeworkContainer
                    subjectId={subjectId}
                    subjectHomeworksList={homeworksList[subjectId]}
                    teacherName={subject.teacherName}
                />
            }
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;