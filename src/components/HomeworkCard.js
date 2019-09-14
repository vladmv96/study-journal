import React from 'react';
import {getSubjectCardColor} from 'sources/utils';
import 'styles/HomeworkCard.css';
import { statusesDisplay } from 'sources/constants/statusesDisplay';

function HomeworkCard({
    tasks,
    deadlineDate,
    cardStatus,
    handleHomeworkCardClick,
    id
}) {

    return (
        <div 
            className='homework-card-border'
            style={{
                background: getSubjectCardColor()
            }}
            onClick={() => handleHomeworkCardClick(id)}
        >
            <div className='homework-card'>
                <div className='homework-card-tasks'>
                    {tasks}
                </div>
                <div className='homework-card-deadline-date'>
                    {deadlineDate}
                </div>
                <div className='homework-card-status'>
                    {statusesDisplay[cardStatus] || cardStatus}
                </div>
            </div>
            
        </div>
    );
}

export default HomeworkCard;