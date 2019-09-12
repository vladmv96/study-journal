import React from 'react';
import '../../styles/HomeworkModal.css';
import { CloseButton } from '../../icons/closeButton';

function HomeworkModal({
    currentHomeworkId,
    toggleHomeworkCardModal,
    tasks,
    deadlineDate,
    teacherName
}) {
    return (
        <div 
            className='homework-modal-container-back'
            onClick={() => toggleHomeworkCardModal()}
        >
            <div className='homework-modal-container-gradient' onClick={(e) => e.stopPropagation(e)}>
                <div className='homework-modal-container' >
                    <div className='homework-modal-close-button' onClick={() => toggleHomeworkCardModal()}><CloseButton width="" fill='#999'/></div>
                    <div className='homework-modal-title'>Задание</div>
                    <div className='homework-modal-teacher'>{teacherName}</div>
                    <div className='homework-modal-tasks'>{tasks}</div>
                    <div className='homework-modal-deadlineDate'>{deadlineDate}</div>
                    <div className='homework-modal-progress'>Selector of progress</div>
                    {currentHomeworkId}
                    
                </div>
            </div>
            
        </div>
    )
}

export default HomeworkModal;