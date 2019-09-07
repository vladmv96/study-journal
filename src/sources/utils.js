function getHomeworkStatusColor(homeworkStatus) {
    switch (homeworkStatus) {
        case 'nodone':
            return 'rgb(254, 190, 190)';
        case 'done':
            return 'rgb(165, 254, 230)';
        default:
            return 'rgb(165, 254, 230)';
        
    }
}

export {
    getHomeworkStatusColor
}