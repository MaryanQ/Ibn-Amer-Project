import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

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
              <tr key={e.id}>
                <td>
                  <Link to={`/students/${e.id}`}>{e.firstname}</Link>
                </td>
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
    </div>
  );
};

export default Students;
