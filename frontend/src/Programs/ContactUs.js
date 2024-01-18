import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import background from "../Images/Background.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import "./kurser.css";
import "./login.css";
import "./kontaktos.css";

const ContactUs = () => {
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
          <h1>Kontakt os</h1>
          <p>
            "Vi tilbyder kurser, der henvender sig til alle aldre og niveauer."
          </p>
        </div>
      </header>

      <section className="contact-section">
        <section className="tildmeddig">
          <div className="wrapper">
            <form action="">
              <h1>Tilmeld dig</h1>
              <div className="input-box">
                <input type="text" placeholder="Fuldenavn" required />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="kursus" required />
              </div>
              <div className="input-box">
                <input type="number" placeholder="Nummer" required />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password</a>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="register-link">
                <p>
                  Dont't have an account <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </section>
        <div className="contact-info">
          <div>
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <span>Phone No.</span>
            <span className="text">1-2392-23928-2</span>
          </div>
          <div>
            <span>
              <i className="fa fa-envelope"></i>
            </span>
            <span>E-mail</span>
            <span className="text">mail@company.com</span>
          </div>
          <div>
            <span>
              <i className="fa fa-map-marker"></i>
            </span>
            <span>Address</span>
            <span className="text">
              2939 Patrick Street, Vicotria TX, United States
            </span>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.3888630372194!2d12.432770075764681!3d55.71699399474994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525052c1ca3ea9%3A0xed6ec7555c367122!2zSMO4cmvDpnIgMzIsIDI3MzAgSGVybGV2!5e0!3m2!1sda!2sdk!4v1701907139240!5m2!1sda!2sdk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
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

export default ContactUs;
