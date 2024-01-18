import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import background from "../Images/Background.jpg";
import reviewer1 from "../Images/reviewer1.png";
import reviewer2 from "../Images/reviewer2.png";
import reviewer3 from "../Images/reviewer3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./kurser.css";
import "./elever.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Tajweed = () => {
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
          <h1>Tajweed</h1>
          <p>
            "Vi tilbyder kurser, der henvender sig til alle aldre og niveauer."
          </p>
        </div>
      </header>

      <section className="info">
        <h1>Opnå Tajweed-færdigheder</h1>
        <p>
          Vores Tajweed-kursus er skræddersyet til både søstre og brødre, og det
          giver dig mulighed for at studere Tajweed på en bekvem og tilgængelig
          måde. Uanset om du er nybegynder inden for Tajweed eller ønsker at
          forfine dine eksisterende færdigheder, tilbyder vores kurser
          omfattende og interaktive lektioner, der sikrer en grundig uddannelse.
        </p>
        <div className="info_container">
          <div className="info_sprite">
            <h3>Hvad du lærer under Tajweed-kurset</h3>
            <ul>
              <li>Makharij af Huruf, Artikulationspunkter for Bogstaver</li>
              <li>Kendskab til Sifaat.</li>
              <li>Viden og regler for Tajweed</li>
              <li>Anvendelse af Tajweed (Implementering).</li>
              <li>
                Praktisk træning med læreren, hvor læren vil udtale, og eleven
                vil gentage efter.
              </li>
            </ul>
          </div>

          <div className="info_sprite" id="info_2">
            <h3>Løft din Quran-recitation til det næste niveau</h3>
            <p>Tilmeld dig nu og oplev fordelene ved at lære Tajweed.</p>
            <a href="" id="course-btn" className="btn">
              Tilmeld dig her
            </a>
          </div>
        </div>
      </section>

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
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </div>
          </div>
          <div className="footer-kontaktos" id="footer-sprite">
            <h4>Kontakt os</h4>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <p>
                  <a href="#">Hørkær 32, 2730 Herlev</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p>
                  <a href="#">IbnAmer@hotmail.com</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
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
                  <FontAwesomeIcon icon={faChevronRight} />
                  Hjem
                </Link>
              </li>
              <li>
                <Link to="/programs/udenadslaering">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Udenadslæring
                </Link>
              </li>
              <li>
                <Link to="/programs/tajweed">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Tajweed
                </Link>
              </li>
              <li>
                <Link to="/programs/ijazah">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Ijazah
                </Link>
              </li>
              <li>
                <Link to="/programs/elever">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Elever
                </Link>
              </li>
              <li>
                <Link to="/programs/about-us">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Om os
                </Link>
              </li>
              <li>
                <Link to="/programs/contactUs">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Kontakt os
                </Link>
              </li>
              <li>
                <Link to="/programs/teachers">
                  <FontAwesomeIcon icon={faChevronRight} />
                  Underviser
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tajweed;
