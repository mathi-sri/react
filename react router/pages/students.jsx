import { Link } from "react-router-dom";
import students from "../data/Student";

function Students() {
  return (
    <div className="page-container">

      <h1>Students</h1>

      <p className="page-description">
        Click a student to test dynamic routing.
      </p>

      <div className="student-grid">

        {students.map((student) => (
          <div
            className="student-card"
            key={student.id}
          >

            <h2>{student.name}</h2>

            <p>Age: {student.age}</p>

            <p>Course: {student.course}</p>

            <Link
              to={`/students/${student.id}`}
              className="primary-btn"
            >
              View Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Students;