import React, { useState, useEffect } from 'react';
import MainPageHeader from '../MainPageHeader';
import SubjectCardsContainer from '../SubjectCardsContainer';
import SubjectPage from './SubjectPage';
import HomeworkPage from './HomeworkPage';
import { STUDENT_ROLE } from 'sources/constants/roles';
import {
    CARDS_ROUTE,
    MAIN_ROUTE,
    HOMEWORKS_ROUTE
} from 'sources/constants/routes';
import { getSubjectsFetch, getHomeworksFetch } from 'sources/API';
import { testSubjects, testHomeworks } from 'sources/test_data';
import 'styles/student/StudentMainPage.css';

function StudentMainPage() {
    const [currentPage, setCurrentPage] = useState(HOMEWORKS_ROUTE);
    const [subjectId, setSubjectId] = useState(null);
    const [subjectsList, setSubjectsList] = useState(testSubjects);
    const [homeworksList, setHomeworksList] = useState(testHomeworks);

    useEffect(() => {
        getSubjectsFetch(1).then((data) => {
            setSubjectsList(data);
        });
        getHomeworksFetch(1).then((data) => {
            setHomeworksList(data);
        });
    }, [])

    function handleSubjectCardClick(id) {
        setCurrentPage(MAIN_ROUTE);
        setSubjectId(id);
    }

    

    return (
        <div className='student-main-page'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                role={STUDENT_ROLE}
            />
            {currentPage === CARDS_ROUTE &&
            <SubjectCardsContainer
                handleCardClick={handleSubjectCardClick}
                subjects={subjectsList}
            />}
            {currentPage === MAIN_ROUTE &&
            <SubjectPage
                subjectId={subjectId}
                subject={subjectsList[subjectId - 1]}
                homeworksList={homeworksList}
            />}
            {currentPage === HOMEWORKS_ROUTE &&
            <HomeworkPage 
                subjectsList={subjectsList}
                homeworksList={homeworksList}
            />
            }
        </div>
    );
}

export default StudentMainPage;