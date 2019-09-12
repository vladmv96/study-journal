import React, { useState, useEffect } from 'react';
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
import { getSubjectsFetch, getHomeworksFetch } from '../../sources/API';
import { testSubjects, testHomeworks } from '../../sources/test_data';

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
        })
    }, [])

    function handleSubjectCardClick(id) {
        setCurrentPage(MAIN_ROUTE);
        setSubjectId(id);
    }

    function renderHomeworksPage(item) {
        return (
            <HomeworksPage
                subjectId={item.id}
                teacherName={item.teacherName}
                subjectTitle={item.subjectTitle}
                homeworksList={homeworksList[item.id]}
            />
        )
    }

    console.log(subjectsList, subjectId)


    return (
        <div className='studentMainPage'>
            <MainPageHeader
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                role={STUDENT_ROLE}
            />
            {currentPage === CARDS_ROUTE &&
            <CardsContainer
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
                <div>
                    <div className='homework-page-title'>Домашнее задание</div>
                    {subjectsList.map(renderHomeworksPage)}
                </div>
                }
        </div>
    );
}

export default StudentMainPage;