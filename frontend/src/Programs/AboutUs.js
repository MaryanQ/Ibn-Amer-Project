import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import background from "../Images/Background.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./kurser.css";

const AboutUs = () => {
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

      <section className="info">
        <h1>Hvem er Ibn Amer Institute?</h1>
        <p>
          Vi er en uddannelsesinstution der specialisere sig udenfor
          reciitationsstile (qira'at) og koranens videnskaber. <br />
          <br />
          Vi specialisere os også indefor udenadslære af koranen, og arbejder
          for at sprede koranens videnskaber vidt og bredt. <br />
          Ibn amer Institute mellem eleven og undervisere er i fokus.
        </p>
        <div className="info_container">
          <div className="info_sprite">
            <h3>Vores vision</h3>
            <p>
              Vores vision er at være frontløbere indenfor udenadslære af
              koranen, hvor eleven udvikles til at være rollemodeller, Imamer og
              recitatorer i deres felt.
            </p>
          </div>

          <div className="info_sprite">
            <h3>vores struktur</h3>
            <p>
              Vores institut har flere linjer og forløb, der passer med elevens
              niveau.
            </p>
          </div>
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

export default AboutUs;
