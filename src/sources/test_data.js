const testStudentData = {
  id: 1,
  name: "Admin",
  subjects: [
    {
      id: 1,
      title: "Математика",
      homeworkStatus: "done",
      teacherName: "Анастасия",
      averageMark: "4,6",
      homework: [
        {
          id: 0,
          tasks: "113",
          deadlineDate: "01.09.2020",
          status: "in_progress",
          mark: ""
        },
        {
          id: 1,
          tasks: "113 34325 34 342 ",
          deadlineDate: "09.09.2019",
          status: "done",
          mark: "4"
        },
        {
          id: 2,
          tasks: "113",
          deadlineDate: "01.09.2020",
          status: "no_done",
          mark: ""
        },
        {
          id: 3,
          tasks: "113",
          deadlineDate: "01.09.2020",
          status: "in_progress",
          mark: ""
        },
        {
          id: 4,
          tasks: "113 34325 34 342 ",
          deadlineDate: "09.09.2019",
          status: "done",
          mark: "5"
        },
        {
          id: 5,
          tasks: "113",
          deadlineDate: "01.09.2020",
          status: "in_progress",
          mark: ""
        }
      ],
      marks: [
        {
          value: "4",
          type: "homework"
        }
      ]
    },
    {
      id: 2,
      title: "Русский язык",
      homeworkStatus: "in_progress",
      teacherName: "Anastasiya",
      averageMark: "4.6",
      homework: [
        {
          id: 0,
          tasks: "234",
          deadlineDate: "01.09.2020",
          status: "in_progress",
          mark: ""
        },
        {
          id: 1,
          tasks: "1234432 ",
          deadlineDate: "09.09.2019",
          status: "done",
          mark: "4"
        },
        {
          id: 2,
          tasks: "1254352",
          deadlineDate: "01.09.2020",
          status: "no_done",
          mark: ""
        }
      ]
    },
    {
      id: 3,
      title: "Английский язык",
      homeworkStatus: "no_done",
      teacherName: "Anastasiya",
      averageMark: "3.7"
    },
    {
      id: 4,
      title: "Физика",
      homeworkStatus: "done",
      teacherName: "Anastasiya",
      averageMark: "4.9"
    },
    {
      id: 5,
      title: "История",
      homeworkStatus: "done",
      teacherName: "Anastasiya",
      averageMark: ""
    },
    {
      id: 6,
      title: "География",
      homeworkStatus: "done",
      teacherName: "Anastasiya",
      averageMark: "3.6"
    },
    {
      id: 7,
      title: "Обществознание",
      homeworkStatus: "no_done",
      teacherName: "Anastasiya",
      averageMark: "4.0"
    }
  ]
};

export { testStudentData };
