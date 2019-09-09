import React, {useState} from 'react';
import HomeworkCard from '../HomeworkCard.js';
import '../../styles/HomeworksPage.css';
import HomeworkModal from './HomeworkModal';

function HomeworksPage() {

    const [homeworkModalIsOpen, setHomeworkModalIsOpen] = useState(false);
    const [currentHomeworkId, setCurrentHomeworkId] = useState(0);

    const homeworkCards = [
        {
            id: 0,
            tasks: '113',
            deadlineDate: '01.09.2020',
            cardStatus: 'inprogress'
        },
        {   id: 1,
            tasks: '113 34325 34 342 ',
            deadlineDate: '09.09.2019',
            cardStatus: 'done'
        },
        {
            id: 2,
            tasks: '113',
            deadlineDate: '01.09.2020',
            cardStatus: 'nodone'
        },
        {
            id: 3,
            tasks: '113',
            deadlineDate: '01.09.2020',
            cardStatus: 'inprogress'
        },
        {   id: 4,
            tasks: '113 34325 34 342 ',
            deadlineDate: '09.09.2019',
            cardStatus: 'done'
        },
        {
            id: 5,
            tasks: '113',
            deadlineDate: '01.09.2020',
            cardStatus: 'inprogress'
        }
    ]

    function handleHomeworkCardClick(id) {
        setCurrentHomeworkId(id);
        toggleHomeworkCardModal();
    }

    function toggleHomeworkCardModal() {
        setHomeworkModalIsOpen(!homeworkModalIsOpen);
    }

    function renderHomeworkCard(item) {
        return (
            <HomeworkCard
                key={item.id}
                id={item.id}
                tasks={item.tasks}
                deadlineDate={item.deadlineDate}
                cardStatus={item.cardStatus}
                handleHomeworkCardClick={handleHomeworkCardClick}
            />
        )
    };
    return (
        <div 
            className='homeworks-page'
        >
            <div>
                <div className='homework-page-title'>Домашние задания</div>
                <div className='homework-cards-container'>
                    {homeworkCards.map(renderHomeworkCard)}
                </div>
            </div>

            {homeworkModalIsOpen && <HomeworkModal 
            currentHomeworkId={currentHomeworkId} 
            toggleHomeworkCardModal={toggleHomeworkCardModal}
            />}
            
        </div>
    );
}

export default HomeworksPage;