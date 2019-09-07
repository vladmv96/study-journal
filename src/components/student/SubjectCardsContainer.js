import React from 'react';
import '../../styles/SubjectCardsContainer.css';
import SubjectCard from './SubjectCard';

function SubjectCardsContainer({
    handleCardClick
}) {

    const subjects = [
        {
            id: 1,
            subjectTitle: "Math",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '4.8'
        },
        {
            id: 2,
            subjectTitle: "Math",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '4.8'
        },
        {
            id: 3,
            subjectTitle: "Math",
            homeworkStatus: 'nodone',
            teacherName: 'Anastasiya',
            averageMark: '4.8'
        },
        {
            id: 4,
            subjectTitle: "Math",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '4.8'
        },
    ];


    function renderSubjectCard(item) {
        return (
            <SubjectCard
                key={item.id}
                id={item.id}
                subjectTitle={item.subjectTitle}
                homeworkStatus={item.homeworkStatus}
                teacherName={item.teacherName}
                averageMark={item.averageMark}
                handleCardClick={handleCardClick}
          />
        );
    }
    return (
        <div className='subjectCardsContainer'>
            {subjects.map(renderSubjectCard)}
        </div>
    );
}

export default SubjectCardsContainer;