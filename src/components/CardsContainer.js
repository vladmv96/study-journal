import React from 'react';
import 'styles/CardsContainer.css';
import SubjectCard from './student/SubjectCard';

function CardsContainer({
    handleCardClick,
    subjects
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
            {subjects && subjects.map(renderSubjectCard)}
        </div>
    );
}

export default CardsContainer;