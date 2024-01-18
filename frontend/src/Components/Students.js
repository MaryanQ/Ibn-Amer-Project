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
    <div className="container mt-4">
      <div className="d-flex justify-content-center mb-3">
        <h3>Students List</h3>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Number</th>
              <th scope="col">Actions</th>
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
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
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
