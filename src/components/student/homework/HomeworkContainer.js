import React, { useState } from 'react';
import HomeworkCard from './HomeworkCard';
import 'styles/student/HomeworkContainer.css';
import HomeworkModal from './HomeworkModal';

function HomeworkContainer({
    subjectHomeworksList,
    title,
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
                status={item.status}
                handleHomeworkCardClick={handleHomeworkCardClick}
            />
        )
    };
    return (
        <div 
            className='homework-container'
        >
            <div>
                <div className='homework-container-title'>{title || 'Домашнее задание'}</div>
                <div className='homework-container-cards'>
                    {subjectHomeworksList && subjectHomeworksList.map(renderHomeworkCard)}
                </div>
            </div>

            { homeworkModalIsOpen &&
                <HomeworkModal 
                    currentHomeworkId={currentHomeworkId} 
                    toggleHomeworkCardModal={toggleHomeworkCardModal}
                    tasks={subjectHomeworksList[currentHomeworkId].tasks}
                    deadlineDate={subjectHomeworksList[currentHomeworkId].deadlineDate}
                    teacherName={teacherName}
                    title={title}
                    status={subjectHomeworksList[currentHomeworkId].status}
                />}
            
        </div>
    );
}

export default HomeworkContainer;