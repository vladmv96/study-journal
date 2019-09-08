import React from 'react';
import '../../styles/SubjectCard.css';
import {getHomeworkStatusColor} from '../../sources/utils';

function SubjectCard({
    subjectTitle,
    homeworkStatus,
    teacherName,
    averageMark,
    handleCardClick,
    id
}) {

  return (
    <div className='module-border-wrap'>
        <div
          className='subjectCard'
          onClick={() => handleCardClick(id)}
        >
            <h1 className='subjectName' >{subjectTitle}</h1>
            <div 
                className='homeworkStatus' 
                style={{
                    backgroundColor: getHomeworkStatusColor(homeworkStatus)
                }}>
                Д/з: {homeworkStatus}</div>
            <h2 className='averageMark'>{averageMark}</h2>
            <h5 className='teacherName'>Учитель: {teacherName}</h5>
        </div>
    </div>
  );
}

export default SubjectCard;
