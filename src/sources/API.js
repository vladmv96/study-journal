const API_URL = 'http://localhost:3001'

function getStudentDataFetch(studentId) {
    return fetch(`${API_URL}/student/${studentId}/data`).then(
        res => res.json()
    );
}

export {
    API_URL,
    getStudentDataFetch
}