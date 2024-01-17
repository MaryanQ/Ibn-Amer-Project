import React, { useState } from "react";
import { Link } from "react-router-dom";
import myVideo from "../Images/IBN AMER INSTITUTE (2).mp4";
import logo from "../Images/logo.png";
import course1 from "../Images/course1.png";
import "./style.css";

const HomePage = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };
  return (
    <div>
      <header className="header">
        <nav>
          <video autoPlay loop muted playsInline className="video">
            <source src={myVideo} type="video/mp4" />
          </video>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <div
            className={`nav-links ${isMenuVisible ? "show" : ""}`}
            id="navLinks"
          >
            <i className="fa fa-times" onClick={() => hideMenu()}></i>
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
                    <Link to="/programs/Ijazah">Ijazah</Link>
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
          <i className="fa fa-bars" onClick={() => showMenu()}></i>
        </nav>

        <div className="text-box">
          <img src="/Images/arabic-removebg-preview.png" alt="" />
          <p>
            "De bedste blandt jer muslimer er dem, der lærer Koranen og
            underviser i den."
          </p>
          <Link to="/kontaktos" className="btn">
            Tilmeld dig en introdag
          </Link>
        </div>
        <div className="jump-arrow">
          <span></span>
          <span></span>
        </div>
      </header>

      <section className="about-us">
        <div className="about-img">
          <img src="/Images/tajweed1.jpg" alt="" />
        </div>
        <div className="text">
          <h1>
            Hvem er Ibn Amer Institute?
            <img src={logo} alt="Logo" />
          </h1>
          <hr />
          <p>
            Vi er en uddannelsesinstitution der specialiserer sig udenfor
            recitationsstile qira'at og koranens videnskaber. <br />
            <br />
            Vi specialiserer os også indenfor udenadslære af koranen, og
            arbejder for at sprede koranens videnskaber vidt og bredt. <br />
            Ibn Amer Institute mellem eleven og underviser er i fokus.
          </p>
        </div>
      </section>

      <section className="count" id="counters">
        <div className="box-container" id="counter-wrapper">
          <div className="box">
            <i className="fa fa-graduation-cap"></i>
            <div className="label2">
              <h3>
                <span data-count="20">0</span>+
              </h3>
              <p>Hufadhs</p>
            </div>
          </div>
          <div className="box">
            <i className="fa fa-user"></i>
            <div className="label2">
              <h3>
                <span data-count="100">0</span>+
              </h3>
              <p>elever</p>
            </div>
          </div>
          <div className="box">
            <i className="fa fa-user"></i>
            <div className="label2">
              <h3>
                <span data-count="30">0</span>+
              </h3>
              <p>Ijazah</p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1>Kursus vi tilbyder</h1>
        <p>
          Vi tilbyder 3 kurser, der henvender sig til alle aldre og niveauer.
        </p>

        <div className="container">
          <Link
            to="/programs/udenadslaering"
            className="course_sprite"
            id="course1"
          >
            <img src={course1} alt="Course 1" />
            <div className="label">
              <h3>UDENADLÆRING</h3>
            </div>
          </Link>

          <Link to="/tajweed" className="course_sprite">
            <img src="/Images/tajweed1.jpg" alt="Course 2" />
            <div className="label">
              <h3>ADVANCED TAJWEED</h3>
            </div>
          </Link>

          <Link to="/ijazah" className="course_sprite">
            <img src="/Images/ijazah.jpg" alt="Course 3" />
            <div className="label">
              <h3>IJAZAH</h3>
            </div>
          </Link>
        </div>
      </section>

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

export default HomePage;
