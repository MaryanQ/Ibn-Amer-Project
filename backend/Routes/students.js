import { Router } from "express";
import mysql from "mysql2";
import dbConfig from "../db-connect.js";

const studentsRouter = Router();

studentsRouter.get("/", (req, res) => {
  const queryString = /*sql*/ `
    SELECT * FROM students ORDER BY firstname;`;

  dbConfig.query(queryString, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});
studentsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const queryString = /*sql*/ `
    SELECT * 
    FROM students
    WHERE id=?;`;
  const values = [id];

  dbConfig.query(queryString, values, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        error: "An error occurred while fetching student details",
      });
    } else {
      if (results.length > 0) {
        res.json(results[0]); // Sending the student details
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    }
  });
});

studentsRouter.post("/", (req, res) => {
  const { firstname, lastname, email, gender, number } = req.body;

  // Validering af numerisk 'number'
  const numericNumber = parseFloat(number);

  if (isNaN(numericNumber)) {
    return res.status(400).json({
      error: "Invalid 'number' format. Please provide a valid number.",
    });
  }

  // Opret forbindelse til databasen og udfør indsættelsen af data

  const insertQuery =
    "INSERT INTO Students (`firstname`, `lastname`, `email`, `gender`, `number`) VALUES (?, ?, ?, ?, ?)";
  const values = [firstname, lastname, email, gender, number];

  dbConfig.query(insertQuery, values, (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the student" });
    }
    return res
      .status(201)
      .json({ message: "Student has been created successfully" });
  });
});

studentsRouter.delete("/:id", (req, res) => {
  const studentid = req.params.id;
  console.log("Received DELETE request for student ID:", studentid);

  // Validering af studentId (her antages det, at studentId skal være en numerisk værdi)
  if (!studentid || isNaN(studentid)) {
    return res.status(400).json({ message: "Invalid student ID" });
  }

  const deleteQuery = "DELETE FROM students WHERE id = ?";

  dbConfig.query(deleteQuery, [studentid], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to delete student" });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  });
});

//{ firstname, lastname, email, gender, number, image
studentsRouter.put("/edit_student/:id", (req, res) => {
  const studentId = req.params.id;
  console.log("Received PUT request for student with ID:", studentId);

  // Validate that required fields are present in the request body
  const { firstname, lastname, email, gender, number } = req.body;
  if (!firstname || !lastname || !email || !gender || !number) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("Request Body:", req.body);

  const q =
    "UPDATE students SET `firstname`= ?, `lastname`= ?, `email`= ?, `gender`= ?, `number`= ? WHERE id =?";

  const values = [firstname, lastname, email, gender, number, studentId];

  dbConfig.query(q, values, (err, data) => {
    if (err) {
      console.error("Error updating student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    console.log("Student updated successfully");
    return res.status(200).json({ message: "Student updated successfully" });
  });
});

export default studentsRouter;
