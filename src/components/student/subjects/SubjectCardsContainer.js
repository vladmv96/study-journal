import React from 'react';
import 'styles/SubjectCardsContainer.css';
import SubjectCard from './SubjectCard';

function SubjectCardsContainer({
    handleCardClick,
    subjectsList
}) {

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
        <div className='cards-container'>
            {subjectsList && subjectsList.map(renderSubjectCard)}
        </div>
    );
}

export default SubjectCardsContainer;