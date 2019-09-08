import React, { useState } from 'react';
import MainPageHeader from '../MainPageHeader';
import CardsContainer from '../CardsContainer';
import SubjectPage from './SubjectPage';
import HomeworksPage from './HomeworksPage';
import { STUDENT_ROLE } from '../../sources/constants/roles';
import {
    CARDS_ROUTE,
    MAIN_ROUTE,
    HOMEWORKS_ROUTE
} from '../../sources/constants/routes';

function StudentMainPage() {
    const [currentPage, setCurrentPage] = useState(CARDS_ROUTE);
    const [cardId, setCardId] = useState(null);

    function handleCardClick(id) {
        setCurrentPage(MAIN_ROUTE);
        setCardId(id);
    }

    return (
        <div className='studentMainPage'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                role={STUDENT_ROLE}
            />
            {currentPage === CARDS_ROUTE &&
                <CardsContainer
                    handleCardClick={handleCardClick}
                 />}
            {currentPage === MAIN_ROUTE &&
            <SubjectPage
                cardId={cardId}
            />}
            {currentPage === HOMEWORKS_ROUTE &&
            <HomeworksPage />}
        </div>
    );
}

export default StudentMainPage;