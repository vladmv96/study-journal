import React from 'react';

function StudentMainPageHeader({
    setCurrentPage
}) {

    return (
        <div className='studentMainPageHeader'>
            <button onClick={() => setCurrentPage('cards')}>Карточки</button>
        </div>
    );
}

export default StudentMainPageHeader;