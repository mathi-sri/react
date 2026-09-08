import { useParams } from "react-router-dom";
import students from "../data/Student";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h1>Student Not Found</h1>;
  }

  return (
    <div>
      <h1>Student Details</h1>

      <h2>{student.name}</h2>

      <p>ID: {student.id}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentDetails;