import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useLayoutEffect } from "react";
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
import Elever from "./Programs/Elever";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/sidebar/edit_student/:id" component={EditStudent} />
        <Route path="/sidebar/students" element={<Students />} />
        <Route path="/sidebar/course" element={<Course />} />
        <Route path="/sidebar/profile" element={<Profile />} />
        <Route path="/student_detail/:id" element={<StudentDetail />} />
        <Route path="/sidebar/add_course" element={<AddCourse />} />
        <Route path="/sidebar/add_student" element={<AddStudent />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/programs/about-us" element={<AboutUs />} />
        <Route path="/programs/ContactUs" element={<ContactUs />} />
        <Route path="/programs/Udenadslaering" element={<Udenadslaering />} />
        <Route path="/programs/Ijazah" element={<Ijazah />} />
        <Route path="/programs/tajweed" element={<Tajweed />} />
        <Route path="/programs/teachers" element={<Teachers />} />
        <Route path="/programs/Elever" element={<Elever />} />
      </Routes>
    </Router>
  );
}

export default App;
