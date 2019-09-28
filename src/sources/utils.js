function getHomeworkStatusColor(homeworkStatus) {
    switch (homeworkStatus) {
        case 'no_done':
            return '246, 141, 141';
        case 'done':
            return '151,247,168';
        case 'in_progress':
            return '251, 227, 184' ;
        default:
            return '165, 254, 230';
        
    }
}

function getCardColor(subjectName) {
    switch (subjectName) {
        case 'Математика':
            return 'linear-gradient(45deg, #F1F9D3, #97F7F5)';
        default:
            return 'linear-gradient(45deg, #F1F9D3, #97F7F5)';
    }
}

export {
    getHomeworkStatusColor,
    getCardColor
}