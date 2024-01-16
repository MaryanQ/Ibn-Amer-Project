import React, { useState, useEffect } from "react";
import axios from "axios";

const EditStudent = ({ match }) => {
  const studentId = match.params.id;
  const [student, setStudent] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    number: "",
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch student data by ID
    axios
      .get(`http://localhost:3300/students/${studentId}`)
      .then((response) => {
        if (response.data.Status) {
          setStudent(response.data.Result);
          setFormData({
            firstname: response.data.Result.firstname,
            lastname: response.data.Result.lastname,
            email: response.data.Result.email,
            gender: response.data.Result.gender,
            number: response.data.Result.number,
            // Update with other fields as needed
          });
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => console.error(error));
  }, [studentId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update student data on the server
    // Example: axios.put(`http://localhost:3300/students/${studentId}`, formData)
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h2>Edit Student Information</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Include form fields for modifying student information */}
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        {/* Add other form fields for email, gender, number, etc. */}
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
