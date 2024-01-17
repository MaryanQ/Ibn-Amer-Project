import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import background from "../Images/Background.jpg";
import reviewer1 from "../Images/reviewer1.png";
import reviewer2 from "../Images/reviewer2.png";
import reviewer3 from "../Images/reviewer3.jpg";
import teacher from "../Images/teacher.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./kurser.css";

const teachers = () => {
  const toggleCourseBody = () => {
    // Implement your toggleCourseBody functionality here
  };

  const showMenu = () => {
    document.getElementById("navLinkss").style.right = "0";
  };

  const hideMenu = () => {
    document.getElementById("navLinkss").style.right = "-200px";
  };

  return (
    <div>
      <header className="header1">
        <nav>
          <img className="kurser-img" src={background} alt="background" />

          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={() => this.hideMenu()}></i>
            <ul>
              <li>
                <Link to="/">HJEM</Link>
              </li>
              <li>
                <Link to="/programs/about-us">OM OS</Link>
              </li>
              <li>
                <Link to="#">KURSER</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/programs/Udenadslaering">Udenadslæring</Link>
                  </li>
                  <li>
                    <Link to="/programs/tajweed">Tajweed</Link>
                  </li>
                  <li>
                    <Link to="/programs/ijazah">Ijazah</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/programs/teachers">UNDERVISER</Link>
              </li>
              <li>
                <Link to="/programs/elever">ELEVER</Link>
              </li>
              <li>
                <Link to="/programs/contactUs">KONTAKT OS</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={() => this.showMenu()}></i>
        </nav>

        <div className="text-box1">
          <h1>Om os</h1>
          <p>
            "Vi tilbyder kurser, der henvender sig til alle aldre og niveauer."
          </p>
        </div>
      </header>

      <div className="teacher">
        <div className="teacher-left-content">
          <div className="teacher-img opacity-100">
            <img src={teacher} alt="" />
          </div>
          <h2>Sheikh Isran</h2>
          <h3>certificerde underviser</h3>
        </div>
        <div className="teacher-right">
          <h1>Underviser</h1>
          <h2>
            lorem <span> & lorem</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid
            laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam
            numquam? Temporibus, molestias amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure
            tempora alias laudantium sapiente impedit!
          </p>
        </div>
      </div>

      <div className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-header text-center">
                <h4>Anmeldelser</h4>
                <h2>Kommentar fra eleverne</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat at animi unde, et, obcaecati eius.
                </p>
              </div>
            </div>
            <div className="col-sm-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="icon-area">
                      <i className="fa fa-comments"></i>
                    </div>
                    <div className="content text-center">
                      <div className="person">
                        <img src={reviewer1} alt="" />
                      </div>
                      <h5>Mohammed Abdullahi</h5>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit reiciendis necessitatibus laborum numquam
                        consequuntur possimus magnam expedita ipsam illum
                        voluptatem quia assumenda placeat, at asperiores vitae
                        obcaecati. Reprehenderit nesciunt voluptatem excepturi,
                        libero ipsum tempora perspiciatis.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="icon-area">
                      <i className="fa fa-comments"></i>
                    </div>
                    <div className="content text-center">
                      <div className="person">
                        <img src={reviewer2} alt="" />
                      </div>
                      <h5>Mariam Salad</h5>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit reiciendis necessitatibus laborum numquam
                        consequuntur possimus magnam expedita ipsam illum
                        voluptatem quia assumenda placeat, at asperiores vitae
                        obcaecati. Reprehenderit nesciunt voluptatem excepturi,
                        libero ipsum tempora perspiciatis.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="icon-area">
                      <i className="fa fa-comments"></i>
                    </div>
                    <div className="content text-center">
                      <div className="person">
                        <img src={reviewer3} alt="" />
                      </div>
                      <h5>Fatima Said</h5>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit reiciendis necessitatibus laborum numquam
                        consequuntur possimus magnam expedita ipsam illum
                        voluptatem quia assumenda placeat, at asperiores vitae
                        obcaecati. Reprehenderit nesciunt voluptatem excepturi,
                        libero ipsum tempora perspiciatis.
                      </p>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon c-btn"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon c-btn"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="footer">
        <div className="footer-container">
          <div className="footer-omos" id="footer-sprite">
            <h4>Om os</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolorem aspernatur distinctio sint quo officia culpa
              necessitatibus! Dolorem quas eveniet, rerum quos iste, aliquam
              illo temporibus nam hic deserunt est.
            </p>
            <div className="footer-socials">
              <li>
                <a href="">
                  <i className="fa fa-facebook-official"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </div>
          </div>
          <div className="footer-kontaktos" id="footer-sprite">
            <h4>Kontakt os</h4>
            <ul>
              <li>
                <span>
                  {" "}
                  <i className="fa fa-map-marker"></i>
                </span>
                <p>
                  <a href="#">Hørkær 32, 2730 Herlev</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                <p>
                  <a href="#">IbnAmer@hotmail.com</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-phone"></i>
                </span>
                <p>
                  <a href="#">+45 00 00 00 00 </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-menu" id="footer-sprite">
            <h4>Menu</h4>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-chevron-right"></i>Hjem
                </Link>
              </li>
              <li>
                <Link to="/programs/udenadslaering">
                  <i className="fa fa-chevron-right"></i>Udenadslæring
                </Link>
              </li>
              <li>
                <Link to="/programs/tajweed">
                  <i className="fa fa-chevron-right"></i>Tajweed
                </Link>
              </li>
              <li>
                <Link to="/programs/ijazah">
                  <i className="fa fa-chevron-right"></i>ijazah
                </Link>
              </li>
              <li>
                <Link to="/programs/elever">
                  <i className="fa fa-chevron-right"></i>Elever
                </Link>
              </li>
              <li>
                <Link to="/programs/about-us">
                  <i className="fa fa-chevron-right"></i>Om os
                </Link>
              </li>
              <li>
                <Link to="/programs/contactUs">
                  <i className="fa fa-chevron-right"></i>Kontakt os
                </Link>
              </li>
              <li>
                <Link to="/programs/teachers">
                  <i className="fa fa-chevron-right"></i>Underviser
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default teachers;
