import React, {useState} from 'react';
import 'styles/student/HomeworkModal.scss';
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

    const [currentHomeworkStatus, setCurrentHomeworkStatus] = useState(status);

    function handleHomeworkStatusClick(status) {
        setCurrentHomeworkStatus(status);
    }

    return (
        <div 
            className='homework-modal container-back'
            onClick={() => toggleHomeworkCardModal()}
        >
            <div className='container-gradient' onClick={(e) => e.stopPropagation(e)}>
                <div className='container' >
                    <div className='close-button' onClick={() => toggleHomeworkCardModal()}>
                        <CloseButton fill='#B9B9CC'/>
                    </div>
                    <div className='title'>{subjectTitle}</div>
                    <div className='tasks-container'>
                        <div className='tasks'>Задание: {tasks}</div>
                        <button className='tasks-files'>Скачать файл</button>
                    </div>
                    <div className='deadline-teacher-container'>
                        <div className='deadlineDate'>Сделать до: {deadlineDate}</div>
                        <div className='teacher'>Учитель: {teacherName}</div>
                    </div>
                    <div className='homework-status'>
                        <button 
                        className={`button-progress ${((currentHomeworkStatus === STATUS_IN_PROGRESS) && 'active-button')}`}
                        onClick={() => handleHomeworkStatusClick(STATUS_IN_PROGRESS)}>
                            В процессе
                        </button>
                        <button 
                        className={`button-progress ${((currentHomeworkStatus === STATUS_DONE) && 'active-button')}`}
                        onClick={() => handleHomeworkStatusClick(STATUS_DONE)}>
                            Сделано
                        </button>
                        <button 
                        className={`button-progress ${((currentHomeworkStatus === STATUS_NO_DONE) && 'active-button')}`}
                        onClick={() => handleHomeworkStatusClick(STATUS_NO_DONE)}>
                            Возникли трудности
                        </button>
                    </div>
                    <div className='files-comment-container'>
                        <div className='comment'>Добавить комментарий</div>
                        <div className='files'>Добавить файл</div>
                    </div>
                    <button className='save-button'>
                        Save
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default HomeworkModal;