import React, { useState, useEffect } from 'react';
import 'styles/student/StudentMainPage.scss';
import MainPageHeader from '../Header';
import SubjectCardsContainer from './subjects/SubjectCardsContainer';
import SubjectPage from './subjects/SubjectPage';
import HomeworkPage from './homework/HomeworkPage';
import MarksProgressPage from './marksProgress/MarksProgressPage';
import { STUDENT_ROLE } from 'sources/constants/roles';
import {
    SUBJECT_CARDS_ROUTE,
    SUBJECT_ROUTE,
    HOMEWORKS_ROUTE,
    MARKS_PROGRESS_ROUTE
} from 'sources/constants/routes';
import { getStudentDataFetch } from 'sources/API';
import { testStudentData } from 'sources/test_data.js';

function StudentMainPage() {
    const [currentPage, setCurrentPage] = useState(HOMEWORKS_ROUTE);
    const [selectedSubjectId, setSelectedSubjectId] = useState(null);
    
    const [studentData, setStudentData] = useState(testStudentData);

    useEffect(() => {
        getStudentDataFetch(1).then((data) => {
            setStudentData(data);
        });
    }, [])

    function handleSubjectCardClick(id) {
        setCurrentPage(SUBJECT_ROUTE);
        setSelectedSubjectId(id);
    } 

    return (
        <div className='student-main-page'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                role={STUDENT_ROLE}
            />
            {currentPage === SUBJECT_CARDS_ROUTE &&
            <SubjectCardsContainer
                handleCardClick={handleSubjectCardClick}
                subjectsList={studentData.subjects}
            />}
            {currentPage === SUBJECT_ROUTE &&
            <SubjectPage
                subjectId={selectedSubjectId}
                subject={studentData.subjects.find(item => item.id === selectedSubjectId)}
            />}
            {currentPage === HOMEWORKS_ROUTE &&
            <HomeworkPage 
                subjectsList={studentData.subjects}
            />
            }
            {currentPage === MARKS_PROGRESS_ROUTE &&
            <MarksProgressPage 
                subjectsList={studentData.subjects}
            />
            }
        </div>
    );
}

export default StudentMainPage;