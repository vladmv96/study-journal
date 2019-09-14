import React, { useState } from 'react';
import MainPageHeader from '../MainPageHeader';
import SubjectCardsContainer from '../SubjectCardsContainer';
import { TEACHER_ROLE } from '../../sources/constants/roles';
import { CARDS_ROUTE, MAIN_ROUTE } from '../../sources/constants/routes';

function TeacherMainPage() {
    const [currentPage, setCurrentPage] = useState(CARDS_ROUTE);

    function handleCardClick(id) {
        setCurrentPage(MAIN_ROUTE);
    }

    return (
        <div className='TeacherMainPage'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                role={TEACHER_ROLE}
            />
            {currentPage === CARDS_ROUTE &&
                <SubjectCardsContainer
                    handleCardClick={handleCardClick}
                 />}
        </div>
    );
}

export default TeacherMainPage;