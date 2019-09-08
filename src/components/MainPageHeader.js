import React from 'react';
import '../styles/MainPageHeader.css';
import { STUDENT_ROLE, TEACHER_ROLE } from '../sources/constants/roles';
import { CARDS_ROUTE, HOMEWORKS_ROUTE } from '../sources/constants/routes';

function StudentMainPageHeader({
    currentPage,
    setCurrentPage,
    role
}) {


    return (
        <div className='mainPageHeaderBackground'>
            <div className='mainPageHeader'>
                {[STUDENT_ROLE, TEACHER_ROLE].includes(role) &&
                <button className={`headerNavButton ${((currentPage===CARDS_ROUTE) && 'active-button')}`} onClick={() => {
                    setCurrentPage(CARDS_ROUTE)
                }}>Предметы</button>
                }
                {role === STUDENT_ROLE &&
                <button className={`headerNavButton ${(currentPage===HOMEWORKS_ROUTE && 'active-button')}`}  onClick={() => {
                    setCurrentPage(HOMEWORKS_ROUTE)}
                }>Домашние задания</button>
                }
                <button className='closeButton'>Выход</button>
            </div>
        </div>
    );
}

export default StudentMainPageHeader;