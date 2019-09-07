import React from 'react';
import Homework from './Homework';
import '../../styles/SubjectPage.css';

function SubjectPage({
    cardId
}) {

    return (
        <div className='subjectPage'>
            <h1>Математика</h1>
            <h2>Id: {cardId}</h2>
            <Homework />
            <h2>Успеваемость</h2>
        </div>
    );
}

export default SubjectPage;