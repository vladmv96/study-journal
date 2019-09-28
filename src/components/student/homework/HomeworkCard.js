import React from 'react';
import {getHomeworkStatusColor} from 'sources/utils';
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
                <div className='tasks'>
                    {tasks}
                </div>
                <div className='deadline-date'>
                    {deadlineDate}
                </div>
                <div className='status'
                style={{
                    color: `rgb(${getHomeworkStatusColor(status)})`
                }}>
                    {statusesDisplay[status] || status}
                </div>
            </div>
            
        </div>
    );
}

export default HomeworkCard;