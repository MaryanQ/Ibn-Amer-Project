import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import forløb1 from "../Images/forløb1.jpg";
import forløb2 from "../Images/forløb2.jpg";
import forløb3 from "../Images/forløb3.jpg";
import background from "../Images/Background.jpg";
import "./styles.css";
import "./kurser.css";

const Udenadslæring = () => {
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
          <h1>Udenadslæring</h1>
          <p>
            "Vi tilbyder kurser, der henvender sig til alle aldre og niveauer."
          </p>
        </div>
      </header>

      <section className="courses" id="cards" onClick={toggleCourseBody}>
        <h1>Udenadslæring</h1>
        <p>Linjer for udenadslære</p>
        <div class="container">
          <div class="course_sprite" id="course1">
            <img src={forløb1} alt="forløb1" />
            <div class="label">
              <h2>1.5-års forløb</h2>
            </div>
            <div class="course_body">
              <div class="course_content">
                <h2>1.5-års forløb</h2>
                <p>
                  Her er målet at færdiggøre memoreringen af koranen på 1.5år,
                  <br />
                  hvor man memorerer 2 ajaa' hver måned.
                </p>
              </div>
            </div>
          </div>
          <div class="course_sprite">
            <img src={forløb2} alt="forløb2" />
            <div class="label">
              <h2>3-års forløb</h2>
            </div>
            <div class="course_body">
              <div class="course_content">
                <h2>3-års forløb</h2>
                <p>
                  I 3 års forløbet et målet at lære koranen udenad, <br />
                  ved at lære 7 ajaa' det første år, 18 ajzaa' det andet år{" "}
                  <br />
                  og fulføreså memoreringen af resten af koranen i tredje år.
                </p>
              </div>
            </div>
          </div>
          <div className="course_sprite">
            <img src={forløb3} alt="forløb3" />
            <div class="label">
              <h2>5-års forløb</h2>
            </div>
            <div class="course_body">
              <div class="course_content">
                <h2>5-års forløb</h2>
                <p>
                  5-år forløbet er forløbet hvor eleven lærer 2 ajaa'(2
                  dele)(dele af 30 dele af koranen) <br />
                  i det første år, 5 ajzaa' det andet år, 10 ajzaa' det tredje
                  år,
                  <br />
                  18 ajzaa' det fjerde år og fuldføre udenadlæren af hele
                  koranene det femte år.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>

      <section className="text-udenads">
        <p>
          Eleven der har færdiggjort memorering af af koranen skal læse hele
          koranen for underviseren adskillige gange, så det memoreret bliver
          stadfæstet i hukommelsen.
          <br />
          Når eleven har reiteret hele koranen for underviseren adskillige
          gange, vil eleven nu forskønne recitationen med underviseren, hvor
          recitation rettes og i henhold til de velkendte recitationsregler og
          metoder.
        </p>
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

export default Udenadslæring;
