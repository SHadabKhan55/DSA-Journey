function StudentResultSystem() {
  const students = [
    {
      id: 1,
      name: "Ali",
      marks: 85
    },
    {
      id: 2,
      name: "Ahmed",
      marks: 45
    },
    {
      id: 3,
      name: "Samad",
      marks: 72
    },
    {
      id: 4,
      name: "Usman",
      marks: 63
    }
  ];

  return (
    <div>
      <h1>Student Result System</h1>

      {students.map(student => {
        let grade = "";
        let status = "";
        let color = "";

        if (student.marks >= 80) {
          grade = "A";
          status = "Pass";
          color = "green";
        } else if (student.marks >= 70) {
          grade = "B";
          status = "Pass";
          color = "blue";
        } else if (student.marks >= 60) {
          grade = "C";
          status = "Pass";
          color = "orange";
        } else {
          grade = "F";
          status = "Fail";
          color = "red";
        }

        return (
          <div key={student.id}>
            <h2>{student.name}</h2>

            <p>Marks: {student.marks}</p>

            <p>
              Grade:{" "}
              <strong style={{ color }}>
                {grade}
              </strong>
            </p>

            <p>
              Status:{" "}
              <strong style={{ color }}>
                {status}
              </strong>
            </p>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default StudentResultSystem;