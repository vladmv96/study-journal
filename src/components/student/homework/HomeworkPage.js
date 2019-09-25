import React from 'react';
import 'styles/student/HomeworkPage.scss';
import HomeworkContainer from './HomeworkContainer';

function HomeworkPage ({
    subjectsList
}) {
    function renderHomeworkContainer(item) {
        return (
            <HomeworkContainer
                key={item.id} 
                subjectId={item.id}
                teacherName={item.teacherName}
                subjectTitle={item.subjectTitle}
                subjectHomeworksList={item.homework}
            />
        )
    }

    return (
        <div>
            {subjectsList && subjectsList.map(renderHomeworkContainer)}
        </div>
    )
}

export default HomeworkPage;