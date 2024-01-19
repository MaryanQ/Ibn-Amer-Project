import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
//import GradeSelector from "./GradeSelector";
//import DateSelector from "./DateSelector";

const StudentDialog = ({
  student,
  homework,
  attendance,
  quranProgress,
  onClose,
}) => {
  return (
    <Modal show={true} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display detailed student information */}
        {student ? (
          <div>
            <h5>{`${student.firstname} ${student.lastname}`}</h5>
            <p>Email: {student.email}</p>
            <p>Gender: {student.gender}</p>
            <p>Number: {student.number}</p>

            {/* Display homework details */}
            {homework && homework.length > 0 ? (
              <div>
                <h6>Homework:</h6>
                <ListGroup>
                  {homework.map((item) => (
                    <ListGroup.Item key={item.homework_id}>
                      <strong>Assignment:</strong> {item.assignment_name} <br />
                      <strong>Description:</strong> {item.description} <br />
                      <strong>Due:</strong> {item.due_date} <br />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>No homework available.</p>
            )}

            {/* Display attendance details */}
            {attendance && attendance.length > 0 ? (
              <div>
                <h6>Attendance:</h6>
                <ListGroup>
                  {attendance.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <strong>Date:</strong> {item.attendance_date} <br />
                      <strong>Status:</strong>{" "}
                      {item.is_present ? "Present" : "Absent"} <br />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>No attendance records available.</p>
            )}

            {/* Display Quran progress details */}
            {quranProgress && quranProgress.length > 0 ? (
              <div>
                <h6>Quran Progress:</h6>
                <ListGroup>
                  {quranProgress.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <strong>Chapter:</strong> {item.chapter_number} <br />
                      <strong>
                        Completed:
                      </strong> {item.is_completed.toString()} <br />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>No Quran progress available.</p>
            )}
          </div>
        ) : (
          <p>No student details available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentDialog;
