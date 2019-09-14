import React from 'react';
import 'styles/student/HomeworkModal.css';
import { CloseButton } from 'icons/closeButton';
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_NO_DONE } from 'sources/constants/statuses';

function HomeworkModal({
    toggleHomeworkCardModal,
    tasks,
    deadlineDate,
    teacherName,
    subjectTitle,
    status,
}) {
    return (
        <div 
            className='homework-modal-container-back'
            onClick={() => toggleHomeworkCardModal()}
        >
            <div className='homework-modal-container-gradient' onClick={(e) => e.stopPropagation(e)}>
                <div className='homework-modal-container' >
                    <div className='homework-modal-close-button' onClick={() => toggleHomeworkCardModal()}>
                        <CloseButton fill='#999'/>
                    </div>
                    <div className='homework-modal-title'>{subjectTitle}</div>
                    <div className='homework-modal-tasks-container'>
                        <div className='homework-modal-tasks'>Задание: {tasks}</div>
                        <button className='homework-modal-tasks-files'>Скачать файл</button>
                    </div>
                    <div className='homework-modal-deadline-teacher-container'>
                        <div className='homework-modal-deadlineDate'>Сделать до: {deadlineDate}</div>
                        <div className='homework-modal-teacher'>Учитель: {teacherName}</div>
                    </div>
                    <div className='homework-modal-homework-status'>
                        <button className={`button-progress ${((status === STATUS_IN_PROGRESS) && 'active-button')}`}>В процессе</button>
                        <button className={`button-progress ${((status === STATUS_DONE) && 'active-button')}`}>Сделано</button>
                        <button className={`button-progress ${((status === STATUS_NO_DONE) && 'active-button')}`}>Возникли трудности</button>
                    </div>
                    <div className='homework-modal-files-comment-container'>
                        <div className='homework-modal-comment'>Comment</div>
                        <div className='homework-modal-files'>Files</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomeworkModal;