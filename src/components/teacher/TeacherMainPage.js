import React, { useState } from 'react';
import MainPageHeader from '../MainPageHeader';
import CardsContainer from '../CardsContainer';
import { TEACHER_ROLE } from '../../sources/constants/roles';
import { CARDS_ROUTE, MAIN_ROUTE } from '../../sources/constants/routes';

function TeacherMainPage() {
    const [currentPage, setCurrentPage] = useState(CARDS_ROUTE);
    const [cardId, setCardId] = useState(null);

    function handleCardClick(id) {
        setCurrentPage(MAIN_ROUTE);
        setCardId(id);
    }

    return (
        <div className='TeacherMainPage'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                role={TEACHER_ROLE}
            />
            {currentPage === CARDS_ROUTE &&
                <CardsContainer
                    handleCardClick={handleCardClick}
                    cardId={cardId}
                 />}
        </div>
    );
}

export default TeacherMainPage;