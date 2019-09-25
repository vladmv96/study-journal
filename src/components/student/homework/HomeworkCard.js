import React from 'react';
import 'styles/HomeworkCard.scss';
import { statusesDisplay } from 'sources/constants/statuses';

function HomeworkCard({
    tasks,
    deadlineDate,
    status,
    handleHomeworkCardClick,
    id
}) {

    return (
        <div 
            className='homework card-border'
            onClick={() => handleHomeworkCardClick(id)}
        >
            <div className='card'>
                <div className='card-tasks'>
                    {tasks}
                </div>
                <div className='card-deadline-date'>
                    {deadlineDate}
                </div>
                <div className='card-status'>
                    {statusesDisplay[status] || status}
                </div>
            </div>
            
        </div>
    );
}

export default HomeworkCard;