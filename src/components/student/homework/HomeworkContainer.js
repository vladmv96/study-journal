import React, { useState } from 'react';
import HomeworkCard from './HomeworkCard';
import 'styles/student/HomeworkContainer.scss';
import HomeworkModal from './HomeworkModal';

function HomeworkContainer({
    subjectHomeworksList,
    subjectTitle,
    teacherName
}) {

    const [homeworkModalIsOpen, setHomeworkModalIsOpen] = useState(false);
    const [currentHomeworkId, setCurrentHomeworkId] = useState(0);
    const currentHomework = subjectHomeworksList && subjectHomeworksList.find(item => item.id === currentHomeworkId);

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
                <div className='homework-container-title'>{subjectTitle || 'Домашнее задание'}</div>
                <div className='homework-container-cards'>
                    {subjectHomeworksList && subjectHomeworksList.map(renderHomeworkCard)}
                </div>
            </div>

            { homeworkModalIsOpen &&
                <HomeworkModal 
                    currentHomeworkId={currentHomeworkId} 
                    toggleHomeworkCardModal={toggleHomeworkCardModal}
                    tasks={currentHomework.tasks}
                    deadlineDate={currentHomework.deadlineDate}
                    teacherName={teacherName}
                    subjectTitle={subjectTitle}
                    status={currentHomework.status}
                />}
            
        </div>
    );
}

export default HomeworkContainer;