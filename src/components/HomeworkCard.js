import React from 'react';
import '../styles/HomeworkCard.css';

function HomeworkCard({
    tasks,
    deadlineDate,
    cardStatus,
    handleHomeworkCardClick,
    id
}) {

    return (
        <div 
            className='homework-card'
            onClick={() => handleHomeworkCardClick(id)}
        >
            <div className='homework-card-tasks'>
                {tasks}
            </div>
            <div className='homework-card-deadline-date'>
                {deadlineDate}
            </div>
            <div className='homework-card-status'>
                {cardStatus}
            </div>
        </div>
    );
}

export default HomeworkCard;