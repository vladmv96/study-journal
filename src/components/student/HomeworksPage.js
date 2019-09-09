import React, { useState } from 'react';
import HomeworkCard from '../HomeworkCard.js';
import '../../styles/HomeworksPage.css';
import HomeworkModal from './HomeworkModal';

function HomeworksPage({
    subjectId,
    homeworksList,
    subjectTitle
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
                    {homeworksList && homeworksList[subjectId] && homeworksList[subjectId].map(renderHomeworkCard)}
                </div>
            </div>

            {homeworkModalIsOpen &&
                <HomeworkModal 
                    currentHomeworkId={currentHomeworkId} 
                    toggleHomeworkCardModal={toggleHomeworkCardModal}
                    tasks={homeworksList[subjectId][currentHomeworkId].tasks}
                    deadlineDate={homeworksList[subjectId][currentHomeworkId].deadlineDate}
                />}
            
        </div>
    );
}

export default HomeworksPage;