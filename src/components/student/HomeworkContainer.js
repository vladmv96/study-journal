import React, { useState } from 'react';
import HomeworkCard from '../HomeworkCard.js';
import 'styles/student/HomeworkContainer.css';
import HomeworkModal from './HomeworkModal';

function HomeworkContainer({
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
            className='homework-container'
        >
            <div>
                <div className='homework-container-title'>{subjectTitle || 'Домашнее задание'}</div>
                <div className='homework-container-cards'>
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
                    subjectTitle={subjectTitle}
                />}
            
        </div>
    );
}

export default HomeworkContainer;