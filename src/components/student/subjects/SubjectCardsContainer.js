import React from 'react';
import 'styles/SubjectCardsContainer.css';
import SubjectCard from './SubjectCard';

function SubjectCardsContainer({
    handleCardClick,
    subjects
}) {

    function renderSubjectCard(item) {
        return (
            <SubjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                homeworkStatus={item.homeworkStatus}
                teacherName={item.teacherName}
                averageMark={item.averageMark}
                handleCardClick={handleCardClick}
          />
        );
    }
    return (
        <div className='cards-container'>
            {subjects && subjects.map(renderSubjectCard)}
        </div>
    );
}

export default SubjectCardsContainer;