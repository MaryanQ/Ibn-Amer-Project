import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ... (previous imports and component setup)

const Students = () => {
  const [students, setStudents] = useState([]);
  const [studentHomework, setStudentHomework] = useState(null);

  useEffect(() => {
    // Fetch the list of students
    axios
      .get("http://localhost:3300/students")
      .then((result) => {
        if (result && result.status === 200) {
          setStudents(result.data);
        } else {
          console.error(result?.statusText || "Unknown error");
          alert("An error occurred while fetching students.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while fetching students.");
      });
  }, []);

  const handleDelete = (id) => {
    // Delete student and refresh the page
    axios
      .delete("http://localhost:3300/delete_students/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  const handleClick = async (id) => {
    try {
      // Fetch additional student homework when a student is clicked
      const response = await axios.get(
        `http://localhost:3300/students/${id}/homework`
      );

      if (response.data.Status) {
        setStudentHomework(response.data.Result);
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching homework data.");
    }
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Students List</h3>
      </div>
      <Link to="/sidebar/add_student" className="btn btn-success">
        Add Student
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>gender</th>
              <th>number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((e) => (
              <tr key={e.id} onClick={() => handleClick(e.id)}>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>{e.gender}</td>
                <td>{e.number}</td>
                <td>
                  <Link
                    to={`/sidebar/edit_student/${e.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Display additional student homework info */}
      {studentHomework && (
        <div>
          <h4>Additional Student Homework Info</h4>
          {/* Display homework info based on the structure of your data */}
          <p>Assignment: {studentHomework.assignment_name}</p>
          <p>Destription: {studentHomework.description}</p>
          <p>Due Date: {studentHomework.due_date}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Students;
