import React from 'react';
import '../../styles/HomeworkModal.css';

function HomeworkModal({
    currentHomeworkId
}) {
    return (
        <div className='homework-modal-container'>
            {currentHomeworkId}
        </div>
    )
}

export default HomeworkModal;