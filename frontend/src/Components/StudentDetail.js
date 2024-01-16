import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const StudentDetail = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Student ID:", id);
    axios
      .get(`http://localhost:3300/students/${id}`)
      .then((res) => setStudent(res.data.Result[0]))
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios
      .get("http://localhost:3300/logout")
      .then((res) => {
        navigate("/start");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Student Management</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Firstname: {student.firstname}</h3>
          <h3>Lastname: {student.lastname}</h3>
          <h3>Email: {student.email}</h3>
          <h3>gender: {student.gender}</h3>
          <h3>number: {student.number}</h3>
        </div>
        <div>
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
