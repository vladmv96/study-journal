import React from 'react';
import 'styles/student/MarksProgressPage.scss';

import {NewSVGFile} from '../../../sources/New SVG';

function MarksProgressPage() {
  return (
    <div className='marks-progress-page'>
        Успеваемость
        <svg>
        </svg>
        {NewSVGFile}
    </div>
  );
}

export default MarksProgressPage;
