import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    number: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get(
          `http://localhost:6500/students/${id}`
        );

        const fetchedStudent =
          studentResponse.data &&
          (Array.isArray(studentResponse.data)
            ? studentResponse.data[0]
            : studentResponse.data);

        if (!fetchedStudent) {
          console.error("Invalid student data format");
          setLoading(false);
          return;
        }

        setStudent({
          firstname: fetchedStudent.firstname,
          lastname: fetchedStudent.lastname,
          email: fetchedStudent.email,
          gender: fetchedStudent.gender,
          number: fetchedStudent.number,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Handle error feedback to the user (e.g., show an error message or redirect)
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("ID:", id);
      console.log("Student:", student);
      await axios.put(`http://localhost:6500/edit_student/${id}`, student);

      navigate("/sidebar/student");
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student. Please try again.");
      console.log("Axios error details:", error.response); // Log Axios error details
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputFirstName" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputFirstName"
              placeholder="Enter FirstName"
              value={student.firstname}
              onChange={(e) =>
                setStudent({ ...student, firstname: e.target.value })
              }
            />
          </div>
          <label htmlFor="inputLastname" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputLastname"
            placeholder="Enter Lastname"
            autoComplete="off"
            value={student.lastname}
            onChange={(e) =>
              setStudent({ ...student, lastname: e.target.value })
            }
          />

          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-0"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />

          <label htmlFor="inputGender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputGender"
            placeholder="Enter Gender"
            autoComplete="off"
            value={student.gender}
            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
          />

          <label htmlFor="inputNumber" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control rounded-0"
            id="inputNumber"
            placeholder="12 34 56 78"
            autoComplete="off"
            value={student.number}
            onChange={(e) => setStudent({ ...student, number: e.target.value })}
          />

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
