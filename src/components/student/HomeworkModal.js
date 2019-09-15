import React from 'react';
import 'styles/student/HomeworkModal.css';
import { CloseButton } from 'icons/closeButton';

function HomeworkModal({
    currentHomeworkId,
    toggleHomeworkCardModal,
    tasks,
    deadlineDate,
    teacherName,
    subjectTitle,
    homeworkStatus,
}) {
    return (
        <div 
            className='homework-modal-container-back'
            onClick={() => toggleHomeworkCardModal()}
        >
            <div className='homework-modal-container-gradient' onClick={(e) => e.stopPropagation(e)}>
                <div className='homework-modal-container' >
                    <div className='homework-modal-close-button' onClick={() => toggleHomeworkCardModal()}><CloseButton width="" fill='#999'/></div>
                    <div className='homework-modal-title'>{subjectTitle}</div>
                    <div className='homework-modal-tasks-container'>
                    <div className='homework-modal-tasks'>Задание: "Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                         ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{tasks}</div>
                        <button className='homework-modal-tasks-files'>Скачать файл</button>
                    </div>
                    <div className='homework-modal-deadline-teacher-container'>
                        <div className='homework-modal-deadlineDate'>Сделать до: {deadlineDate}</div>
                        <div className='homework-modal-teacher'>Учитель: {teacherName}</div>
                    </div>
                    <div className='homework-modal-homework-status'>
                        <button className={`button-progress ${((homeworkStatus ==='inprogress') && 'active-button')}`}>В процессе</button>
                        <button className={`button-progress ${((homeworkStatus ==='done') && 'active-button')}`}>Сделано</button>
                        <button className={`button-progress ${((homeworkStatus ==='nodone') && 'active-button')}`}>Возникли трудности</button>
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