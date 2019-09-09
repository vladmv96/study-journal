import React from 'react';
import '../../styles/HomeworkModal.css';

function HomeworkModal({
    currentHomeworkId,
    toggleHomeworkCardModal,
    tasks,
    deadlineDate
}) {
    return (
        <div 
            className='homework-modal-container-back'
            onClick={() => toggleHomeworkCardModal()}
        >
            <div className='homework-modal-container-gradient' onClick={(e) => e.stopPropagation(e)}>
                <div className='homework-modal-container' >
                    <div className='homework-modal-title'>Задание</div>
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