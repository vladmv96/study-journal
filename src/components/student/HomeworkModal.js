import React from 'react';
import '../../styles/HomeworkModal.css';

function HomeworkModal({
    currentHomeworkId,
    toggleHomeworkCardModal
}) {
    return (
        <div 
            className='homework-modal-container-back'
            onClick={() => toggleHomeworkCardModal()}
        >
            <div className='homework-modal-container' onClick={(e) => e.stopPropagation(e)}>
                {currentHomeworkId}
            </div>
            
        </div>
    )
}

export default HomeworkModal;