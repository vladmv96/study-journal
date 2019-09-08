import React, { useState } from 'react';
import MainPageHeader from './StudentMainPageHeader';
import SubjectCardsContainer from './SubjectCardsContainer';
import SubjectPage from './SubjectPage';

function StudentMainPage() {
    const [currentPage, setCurrentPage] = useState('cards');
    const [cardId, setCardId] = useState(null);

    function handleCardClick(id) {
        setCurrentPage('main');
        setCardId(id);
    }

    return (
        <div className='studentMainPage'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            {currentPage === 'cards' &&
                <SubjectCardsContainer
                    handleCardClick={handleCardClick}
                 />}
            {currentPage === 'main' &&
            <SubjectPage
                cardId={cardId}
            />}
        </div>
    );
}

export default StudentMainPage;