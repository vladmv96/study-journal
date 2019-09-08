function getHomeworkStatusColor(homeworkStatus) {
    switch (homeworkStatus) {
        case 'nodone':
            return 'rgba(250, 207, 207, 1)';
        case 'done':
            return 'rgba(143, 239, 205, 1)';
        case 'inprogress':
            return 'rgba(251, 227, 184, 1)' ;
        default:
            return 'rgb(165, 254, 230)';
        
    }
}

function getSubjectCardColor(subjectName) {
    switch (subjectName) {
        case 'Математика':
            return 'linear-gradient(45deg, #F1F9D3, #97F7F5)';
        default:
            return 'linear-gradient(45deg, #F1F9D3, #97F7F5)';
    }
}

export {
    getHomeworkStatusColor,
    getSubjectCardColor
}