import express from "express";
import dbConfig from "./db-connect.js";
import cors from "cors";
import LoginRouter from "./Routes/Login.js";
import StudentsRouter from "./Routes/students.js";
import teachersRouter from "./Routes/teachers.js";
import attendanceRouter from "./Routes/attendance.js";
import QuranProgressRouter from "./Routes/QuranProgress.js";
import homeworkRouter from "./Routes/homework.js";
import coursesRouter from "./Routes/courses.js";

const app = express();
app.use(express.json());
//app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"], // Specify methods as strings
    credentials: true,
  })
);

app.use("/Login", LoginRouter);
app.use("/students", StudentsRouter);
app.use("/teachers", teachersRouter);
app.use("/attendance", attendanceRouter);
app.use("/QuranProgress", QuranProgressRouter);
app.use("/homework", homeworkRouter);
app.use("/courses", coursesRouter);

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.listen(3300, () => {
  console.log("connected to backend");
});
