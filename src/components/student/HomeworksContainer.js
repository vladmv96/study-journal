import React, { useState } from 'react';
import HomeworkCard from '../HomeworkCard.js';
import 'styles/student/HomeworksContainer.css';
import HomeworkModal from './HomeworkModal';

function HomeworksContainer({
    subjectId,
    homeworksList,
    subjectTitle,
    teacherName
}) {

    const [homeworkModalIsOpen, setHomeworkModalIsOpen] = useState(false);
    const [currentHomeworkId, setCurrentHomeworkId] = useState(0);

    function handleHomeworkCardClick(id) {
        setCurrentHomeworkId(id);
        toggleHomeworkCardModal();
    }

    function toggleHomeworkCardModal() {
        setHomeworkModalIsOpen(!homeworkModalIsOpen);
    }

    function renderHomeworkCard(item) {
        return (
            <HomeworkCard
                key={item.id}
                id={item.id}
                tasks={item.tasks}
                deadlineDate={item.deadlineDate}
                cardStatus={item.cardStatus}
                handleHomeworkCardClick={handleHomeworkCardClick}
            />
        )
    };
    return (
        <div 
            className='homeworks-page'
        >
            <div>
                <div className='homework-page-title'>{subjectTitle || 'Домашнее задание'}</div>
                <div className='homework-cards-container'>
                    {homeworksList && homeworksList.map(renderHomeworkCard)}
                </div>
            </div>

            {homeworkModalIsOpen &&
                <HomeworkModal 
                    currentHomeworkId={currentHomeworkId} 
                    toggleHomeworkCardModal={toggleHomeworkCardModal}
                    tasks={homeworksList[currentHomeworkId].tasks}
                    deadlineDate={homeworksList[currentHomeworkId].deadlineDate}
                    teacherName={teacherName}
                />}
            
        </div>
    );
}

export default HomeworksContainer;