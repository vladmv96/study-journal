const API_URL = 'http://localhost:3001'

function getHomeworksFetch(studentId) {
    return fetch(`${API_URL}/student/${studentId}/homeworks`).then(
        res => res.json()
    );
}

function getSubjectsFetch(studentId) {
    return fetch(`${API_URL}/student/${studentId}/subjects`).then(
        res => res.json()
    );
}

export {
    API_URL,
    getHomeworksFetch,
    getSubjectsFetch
}