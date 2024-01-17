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

Modal.setAppElement(document.body);
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/sidebar/edit_student/:id" element={<EditStudent />} />
        <Route path="/sidebar/students" element={<Students />} />
        <Route path="/sidebar/course" element={<Course />} />
        <Route path="/sidebar/profile" element={<Profile />} />
        <Route path="/sidebar/add_course" element={<AddCourse />} />
        <Route path="/sidebar/add_student" element={<AddStudent />} />
        <Route path="/" exact component={HomePage} />
        <Route path="/programs/about-us" component={AboutUs} />
        <Route path="/programs/contact-us" component={ContactUs} />
        <Route path="/programs/udenadslaering" component={Udenadslaering} />
        <Route path="/programs/ijazah" component={Ijazah} />
        <Route path="/programs/tajweed" component={Tajweed} />
        <Route path="/programs/teachers" component={Teachers} />
      </Routes>
    </Router>
  );
}

export default App;
