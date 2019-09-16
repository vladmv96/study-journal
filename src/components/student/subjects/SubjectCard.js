import React from 'react';
import 'styles/student/SubjectCard.scss';
import {getHomeworkStatusColor, getSubjectCardColor} from 'sources/utils';
import { statusesDisplay } from 'sources/constants/statuses';

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
            className='subject-card'
            onClick={() => handleCardClick(id)}
          >
              <h1 className='subject-name' >{subjectTitle}</h1>
              <div 
                  className='homework-status' 
                  style={{
                      color: `rgb(${getHomeworkStatusColor(homeworkStatus)})`
                  }}>
                  Д/з: {statusesDisplay[homeworkStatus] || homeworkStatus}</div>
              <h2 className='average-mark'>{averageMark}</h2>
              <h5 className='teacher-name'>Учитель: {teacherName}</h5>
          </div>
      </div>
    </div>
  );
}

export default SubjectCard;
