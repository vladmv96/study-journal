const testSubjects = [
  {
    id: 1,
    subjectTitle: "Математика",
    homeworkStatus: "done",
    teacherName: "Anastasiya",
    averageMark: "4.8"
  },
  {
    id: 2,
    subjectTitle: "Русский язык",
    homeworkStatus: "inprogress",
    teacherName: "Anastasiya",
    averageMark: "4.6"
  },
  {
    id: 3,
    subjectTitle: "Английский язык",
    homeworkStatus: "nodone",
    teacherName: "Anastasiya",
    averageMark: "3.7"
  },
  {
    id: 4,
    subjectTitle: "Физика",
    homeworkStatus: "done",
    teacherName: "Anastasiya",
    averageMark: "4.9"
  },
  {
    id: 5,
    subjectTitle: "История",
    homeworkStatus: "done",
    teacherName: "Anastasiya",
    averageMark: ""
  },
  {
    id: 6,
    subjectTitle: "География",
    homeworkStatus: "done",
    teacherName: "Anastasiya",
    averageMark: "3.6"
  },
  {
    id: 7,
    subjectTitle: "Обществознание",
    homeworkStatus: "nodone",
    teacherName: "Anastasiya",
    averageMark: "4.0"
  }
];


const testHomeworks = {
        "1": [
            {
                "id": 0,
                "tasks": "113",
                "deadlineDate": "01.09.2020",
                "homeworkStatus": "inprogress"
            },
            {   "id": 1,
                "tasks": "113 34325 34 342 ",
                "deadlineDate": "09.09.2019",
                "homeworkStatus": "done"
            },
            {
                "id": 2,
                "tasks": "113",
                "deadlineDate": "01.09.2020",
                "homeworkStatus": "nodone"
            },
            {
                "id": 3,
                "tasks": "113",
                "deadlineDate": "01.09.2020",
                "homeworkStatus": "inprogress"
            },
            {   "id": 4,
                "tasks": "113 34325 34 342 ",
                "deadlineDate": "09.09.2019",
                "homeworkStatus": "done"
            },
            {
                "id": 5,
                "tasks": "113",
                "deadlineDate": "01.09.2020",
                "homeworkStatus": "inprogress"
            }
        ],
        "2": [
            {
                "id": 0,
                "tasks": "234",
                "deadlineDate": "01.09.2020",
                "homeworkStatus": "inprogress"
            },
            {   "id": 1,
                "tasks": "1234432 ",
                "deadlineDate": "09.09.2019",
                "homeworkStatus": "done"
            },
            {
                "id": 2,
                "tasks": "1254352",
                "deadlineDate": "01.09.2020",
                "homeworkStatus": "nodone"
            }
        ]
}

export {
    testSubjects,
    testHomeworks
}