import React from 'react';
import '../../styles/SubjectCard.css';
import {getHomeworkStatusColor, getSubjectCardColor} from '../../sources/utils';

function SubjectCard({
    subjectTitle,
    homeworkStatus,
    teacherName,
    averageMark,
    handleCardClick,
    id
}) {

  return (
    <div className='subject-section'>
      <div
        className='module-border-wrap'
        style={{
          background: getSubjectCardColor(subjectTitle)
        }}>
          <div
            className='subjectCard'
            onClick={() => handleCardClick(id)}
          >
              <h1 className='subjectName' >{subjectTitle}</h1>
              <div 
                  className='homeworkStatus' 
                  style={{
                      color: `rgb(${getHomeworkStatusColor(homeworkStatus)})`
                  }}>
                  Д/з: {homeworkStatus}</div>
              <h2 className='averageMark'>{averageMark}</h2>
              <h5 className='teacherName'>Учитель: {teacherName}</h5>
          </div>
      </div>
    </div>
  );
}

export default SubjectCard;
