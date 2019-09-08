import React from 'react';
import '../styles/CardsContainer.css';
import SubjectCard from './student/SubjectCard';

function CardsContainer({
    handleCardClick
}) {

    const subjects = [
        {
            id: 1,
            subjectTitle: "Математика",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '4.8'
        },
        {
            id: 2,
            subjectTitle: "Русский язык",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '4.6'
        },
        {
            id: 3,
            subjectTitle: "Английский язык",
            homeworkStatus: 'nodone',
            teacherName: 'Anastasiya',
            averageMark: '3.7'
        },
        {
            id: 4,
            subjectTitle: "Физика",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '4.9'
        },
        {
            id: 5,
            subjectTitle: "История",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: ''
        },
        {
            id: 6,
            subjectTitle: "География",
            homeworkStatus: 'done',
            teacherName: 'Anastasiya',
            averageMark: '3.6'
        },
        {
            id: 7,
            subjectTitle: "Обществознание",
            homeworkStatus: 'nodone',
            teacherName: 'Anastasiya',
            averageMark: '4.0'
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
        <div className='cardsContainer'>
            {subjects.map(renderSubjectCard)}
        </div>
    );
}

export default CardsContainer;