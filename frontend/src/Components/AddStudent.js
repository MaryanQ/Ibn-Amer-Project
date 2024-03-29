import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  // Initialize student state with default values
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    number: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:6500/students")
      .then((result) => {
        if (result.data.Status) {
          // Assuming the students are in the 'students' property
          setStudent(result.data.students[0]); // Assuming you want to work with the first student
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked"); // Add this line
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      email: student.email,
      gender: student.gender,
      number: student.number,
    };

    // Log the content of payload
    console.log(payload);

    axios
      .post("http://localhost:6500/students", payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        if (result.data.message) {
          // Student added successfully
          console.log(result.data.message);
          navigate("/sidebar/students");
        } else {
          // Error adding student
          console.error("Error adding student:", result.data.error);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add student. Please check the form and try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="student" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputfirstname"
              placeholder="Enter FirstName"
              value={student.firstname}
              onChange={(e) =>
                setStudent({ ...student, firstname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="student" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputlastname"
              placeholder="Enter LastName"
              value={student.lastname}
              onChange={(e) =>
                setStudent({ ...student, lastname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputemail"
              placeholder="Enter Email"
              autoComplete="off"
              value={student.email}
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputgender" className="form-label">
              Gender
            </label>
            <select
              className="form-control rounded-0"
              id="inputGender"
              value={student.gender}
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputnumber" className="form-label">
              Number
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputNumber"
              placeholder="Enter Number"
              value={student.number}
              onChange={(e) =>
                setStudent({ ...student, number: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
