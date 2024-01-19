import React, { useState, useEffect } from "react";
import axios from "axios";
import ConfirmationDialog from "./ConfirmationDialog";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [studentIdToDelete, setStudentIdToDelete] = useState(null);

  useEffect(() => {
    // Fetch the list of students
    axios
      .get("http://localhost:6500/students")
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
    setStudentIdToDelete(id);
    setShowConfirmationDialog(true);
  };

  const handleConfirmationDialogDelete = () => {
    axios
      .delete(`http://localhost:6500/students/${studentIdToDelete}`, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.data.message) {
          // Filter out the deleted student from the current state
          setStudents((prevStudents) =>
            prevStudents.filter((student) => student.id !== studentIdToDelete)
          );
          console.log(result.data.message); // Log success message
        } else {
          alert(
            result.data.error || "An error occurred while deleting the student."
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
        alert("An error occurred while deleting the student.");
      })
      .finally(() => {
        // Reset state after deletion
        setShowConfirmationDialog(false);
        setStudentIdToDelete(null);
      });
  };

  const handleCancelDelete = () => {
    // Reset state if the user cancels
    setShowConfirmationDialog(false);
    setStudentIdToDelete(null);
  };

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center mt-2">
        <h3>Student List</h3>
      </div>
      <Link to="/Sidebar/add_student" className="btn btn-success">
        Add Student
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <Link
                    to={`/students/${student.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {student.firstname}
                  </Link>
                </td>
                <td>{student.lastname}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>{student.number}</td>
                <td>
                  <Link
                    to={`/studentEdit/` + student.id}
                    className="btn btn-primary btn-sm me-2"
                  >
                    edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(student.id)}
                    className="btn btn-sm btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirmationDialog && (
        <ConfirmationDialog
          message="Are you sure you want to delete the student?"
          onConfirm={handleConfirmationDialogDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Students;
