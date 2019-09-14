import React, { useState, useEffect } from 'react';
import MainPageHeader from '../Header';
import SubjectCardsContainer from './subjects/SubjectCardsContainer';
import SubjectPage from './subjects/SubjectPage';
import HomeworkPage from './homework/HomeworkPage';
import MarksProgressPage from './marksProgress/MarksProgressPage';
import { STUDENT_ROLE } from 'sources/constants/roles';
import {
    CARDS_ROUTE,
    MAIN_ROUTE,
    HOMEWORKS_ROUTE,
    MARKS_PROGRESS_ROUTE
} from 'sources/constants/routes';
import { getSubjectsFetch, getHomeworksFetch } from 'sources/API';
import { testSubjects, testHomeworks } from 'sources/test_data';
import 'styles/student/StudentMainPage.css';

function StudentMainPage() {
    const [currentPage, setCurrentPage] = useState(HOMEWORKS_ROUTE);
    const [selectedSubjectId, setSelectedSubjectId] = useState(null);
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
        setSelectedSubjectId(id);
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
                subjectId={selectedSubjectId}
                subject={subjectsList.find(item => item.id === selectedSubjectId)}
                homeworksList={homeworksList}
            />}
            {currentPage === HOMEWORKS_ROUTE &&
            <HomeworkPage 
                subjectsList={subjectsList}
                homeworksList={homeworksList}
            />
            }
            {currentPage === MARKS_PROGRESS_ROUTE &&
            <MarksProgressPage 
                subjectsList={subjectsList}
                homeworksList={homeworksList}
            />
            }
        </div>
    );
}

export default StudentMainPage;