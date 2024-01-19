import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import MyCalendar from "./MyCalender";

const Sidebar = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:3000/logout").then((result) => {
      if (result.data.status) {
        navigate("login");
      }
    });
  };

  const handleLinkClick = (event, to) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/sidebar"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Ibn Caamir Institute
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/sidebar"
                  className="nav-link text-white px-0 align-middle"
                  onClick={(e) => handleLinkClick(e, "/sidebar/students")}
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Sidebar</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="students"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Students</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/sidebar/course"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Course</span>
                </Link>
              </li>

              <li className="w-100"></li>
              <li className="w-100" onClick={handleLogout}>
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Ibn Caamir Institute</h4>
          </div>
          <div className="p-2">
            {/* Content inside the main area */}
            <Outlet />
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
