import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/Login";
import Students from "./Components/Students";
import Profile from "./Components/Profile";
import Course from "./Components/Course";
import AddCourse from "./Components/AddCourse";
import AddStudent from "./Components/AddStudent";
import Sidebar from "./Components/Sidebar";
import StudentDetail from "./Components/StudentDetail";
import EditStudent from "./Components/EditStudent";
import AboutUs from "./Programs/AboutUs";
import ContactUs from "./Programs/ContactUs";
import Udenadslaering from "./Programs/Udenadslaering";
import HomePage from "./Programs/HomePage";
import Ijazah from "./Programs/Ijazah";
import Tajweed from "./Programs/Tajweed";
import Teachers from "./Programs/Teachers";
import Homework from "./Components/Homework";
import MyCalendar from "./Components/MyCalender";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="/studentEdit/:id" element={<EditStudent />} />

        <Route path="/sidebar/students" element={<Students />} />
        <Route path="/sidebar/course" element={<Course />} />
        <Route path="/sidebar/profile" element={<Profile />} />
        <Route path="/sidebar/add_course" element={<AddCourse />} />
        <Route path="/sidebar/add_student" element={<AddStudent />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/sidebar/mycalendar" element={<MyCalendar />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/programs/about-us" element={<AboutUs />} />
        <Route path="/programs/contact-us" element={<ContactUs />} />
        <Route path="/programs/udenadslaering" element={<Udenadslaering />} />
        <Route path="/programs/ijazah" element={<Ijazah />} />
        <Route path="/programs/tajweed" element={<Tajweed />} />
        <Route path="/programs/teachers" element={<Teachers />} />
      </Routes>
    </Router>
  );
}

export default App;
