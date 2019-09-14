import React from 'react';
import 'styles/MainPageHeader.css';
import { STUDENT_ROLE, TEACHER_ROLE } from 'sources/constants/roles';
import { CARDS_ROUTE, HOMEWORKS_ROUTE } from 'sources/constants/routes';

function StudentMainPageHeader({
    currentPage,
    setCurrentPage,
    role
}) {


    return (
        <div className='main-page-header'>
            {[STUDENT_ROLE, TEACHER_ROLE].includes(role) &&
            <button className={`header-nav-button ${((currentPage === CARDS_ROUTE) && 'active-button')}`} onClick={() => {
                setCurrentPage(CARDS_ROUTE)
            }}>Предметы</button>
            }
            {role === STUDENT_ROLE &&
            <button className={`header-nav-button ${(currentPage === HOMEWORKS_ROUTE && 'active-button')}`}  onClick={() => {
                setCurrentPage(HOMEWORKS_ROUTE)}
            }>Домашнее задание</button>
            }
            <button className='close-button'>Выход</button>
        </div>
    );
}

export default StudentMainPageHeader;