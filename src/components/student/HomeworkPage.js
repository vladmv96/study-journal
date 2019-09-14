import React from 'react';
import 'styles/student/HomeworkPage.css';
import HomeworkContainer from './HomeworkContainer';

function HomeworkPage ({
    subjectsList,
    homeworksList

}) {
    function renderHomeworkContainer(item) {
        return (
            <HomeworkContainer
                subjectId={item.id}
                teacherName={item.teacherName}
                subjectTitle={item.subjectTitle}
                homeworksList={homeworksList[item.id]}
            />
        )
    }

    return (
        <div>
            {subjectsList.map(renderHomeworkContainer)}
        </div>
    )
}

export default HomeworkPage;