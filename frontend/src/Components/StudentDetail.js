import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Modal } from "react-bootstrap";

const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const [homework, setHomework] = useState([]);
  const [quranProgress, setQuranProgress] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editedHomework, setEditedHomework] = useState("");
  const [editedAttendance, setEditedAttendance] = useState("");
  const [editedQuranProgress, setEditedQuranProgress] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch student data
        const studentRes = await fetch(`http://localhost:6500/students/${id}`);
        const studentData = await studentRes.json();
        setStudent(studentData);

        // Fetch additional data (homework, quranProgress, attendance)
        const homeworkRes = await fetch(`http://localhost:6500/homework/${id}`);
        const homeworkData = await homeworkRes.json();
        setHomework(homeworkData);

        const quranProgressRes = await fetch(
          `http://localhost:6500/quranprogress/${id}`
        );
        const quranProgressData = await quranProgressRes.json();
        setQuranProgress(quranProgressData);

        const attendanceRes = await fetch(
          `http://localhost:6500/attendance/${id}`
        );
        const attendanceData = await attendanceRes.json();
        setAttendance(attendanceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSave = () => {
    // Add the logic to save the data or perform any other actions
    // Navigate back to the students page
    navigate("/sidebar/students");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditHomework = () => {
    // Add logic to update the edited homework data
    console.log("Edited Homework:", editedHomework);
    // You can implement the logic to update the homework data on the server
  };

  const handleEditAttendance = () => {
    // Add logic to update the edited attendance data
    console.log("Edited Attendance:", editedAttendance);
    // You can implement the logic to update the attendance data on the server
  };

  const handleEditQuranProgress = () => {
    // Add logic to update the edited Quran progress data
    console.log("Edited Quran Progress:", editedQuranProgress);
    // You can implement the logic to update the Quran progress data on the server
  };

  return (
    <div className="container mt-4">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center mb-4">Student Details</Card.Title>

          {student && (
            <>
              <div className="mb-3">
                <strong>Name:</strong> {student.name}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {student.email}
              </div>
              <div className="mb-3">
                <strong>Gender:</strong> {student.gender}
              </div>
              {/* Add more details as needed */}
            </>
          )}

          <div className="info-section mb-4">
            <h3>Homework:</h3>
            {homework.length > 0 ? (
              <ul>
                {homework.map((item) => (
                  <li key={item.id}>
                    <strong>Assignment:</strong> {item.assignment_name}
                    {/* Add more homework details */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No homework available.</p>
            )}
          </div>

          <div className="info-section mb-4">
            <h3>Quran Progress:</h3>
            {quranProgress.length > 0 ? (
              <ul>
                {quranProgress.map((item) => (
                  <li key={item.id}>
                    <strong>Chapter:</strong> {item.chapter_number}
                    {/* Add more Quran progress details */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Quran progress available.</p>
            )}
          </div>

          <div className="info-section mb-4">
            <h3>Attendance:</h3>
            {attendance.length > 0 ? (
              <ul>
                {attendance.map((item) => (
                  <li key={item.id}>
                    <strong>Date:</strong> {item.date}
                    {/* Add more attendance details */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No attendance records available.</p>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="bg-light d-flex justify-content-center">
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
          <Button variant="primary" onClick={handleOpenModal}>
            View Details
          </Button>
        </Card.Footer>
      </Card>

      {/* Display Modal if isModalOpen is true */}
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Add modal content here */}
            <div>
              {/* Edit Homework Form */}
              <div className="mb-3">
                <label>Edit Homework:</label>
                <input
                  type="text"
                  value={editedHomework}
                  onChange={(e) => setEditedHomework(e.target.value)}
                />
                <Button variant="primary" onClick={handleEditHomework}>
                  Save Homework
                </Button>
              </div>

              {/* Edit Quran Progress Form */}
              <div className="mb-3">
                <label>Edit Quran Progress:</label>
                <input
                  type="text"
                  value={editedQuranProgress}
                  onChange={(e) => setEditedQuranProgress(e.target.value)}
                />
                <Button variant="primary" onClick={handleEditQuranProgress}>
                  Save Quran Progress
                </Button>
              </div>

              {/* Edit Attendance Form */}
              <div className="mb-3">
                <label>Edit Attendance:</label>
                <input
                  type="text"
                  value={editedAttendance}
                  onChange={(e) => setEditedAttendance(e.target.value)}
                />
                <Button variant="primary" onClick={handleEditAttendance}>
                  Save Attendance
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default StudentDetail;
