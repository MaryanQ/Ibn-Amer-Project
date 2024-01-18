import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import background from "../Images/Background.jpg";
import ijazah1 from "../Images/ijazah1.jpg";
import ijazah2 from "../Images/ijazah2.jpeg";
import ijazah3 from "../Images/ijazah3.jpg";
import reviewer1 from "../Images/reviewer1.png";
import reviewer2 from "../Images/reviewer2.png";
import reviewer3 from "../Images/reviewer3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import "./kurser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Ijazah = () => {
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
                <Link to="login">LOGIN</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={() => this.showMenu()}></i>
        </nav>

        <div className="text-box1">
          <h1>Ijazah</h1>
          <p>
            "Vi tilbyder kurser, der henvender sig til alle aldre og niveauer."
          </p>
        </div>
      </header>

      <div>
        <section className="info">
          <h1>Linjen for stadfæstelse og forskønnelse af det memoreret</h1>
          <div className="info_body">
            <div className="info_ijazah" id="info_ijazah2">
              <div className="info-ijazah-content">
                <h4>Færdiggørelse af quran</h4>
                <p>
                  Eleven der har færdiggjort memoreringen af Koranen skal læse
                  hele Koranen for underviseren adskillige gange, så det
                  memoreret bliver stadfæstet i hukommelsen. Når eleven har
                  reciteret hele Koranen for underviseren adskillige gange, vil
                  eleven nu forskønne recitationen med underviseren, hvor
                  recitationen rettes og i henhold til de velkendte
                  recitationsregler og metoder. Ijazah-linjen
                </p>
              </div>
              <img className="info_image" src={ijazah1} alt="ijazah1" />
            </div>
            <div className="info_ijazah">
              <img className="info_image" src={ijazah2} alt="ijazah2" />
              <div className="info-ijazah-content">
                <h4>Bevis fra underviseren</h4>

                <p>
                  Ijazah er et anerkendt bevis fra underviseren, at eleven har
                  opnået et specialiseret niveau indenfor den skole og metode af
                  recitation. Der gives derved et bevis og tilladelse til at
                  recitere og undervise i det der er blevet lært af
                  underviseren.
                </p>
              </div>
            </div>
            <div className="info_ijazah">
              <div className="info-ijazah-content">
                <h4>Bevis linket til profeten SAW</h4>
                <p>
                  Denne ijazah (bevis) er et bevis hvor underviseren linker
                  eleven med profeten saw og derved er en del af en anerkendt
                  kæde der går tilbage til profeten Muhammad, I denne
                  specialiseret linje, skal eleven recitere hele Koranen, fra
                  start til slut, udenad, for underviseren. Desuden skal eleven
                  have dybt kendskab til videnskaber der tillæres i forløbet.
                </p>
              </div>
              <img className="info_image" src={ijazah3} alt="ijazah3" />
            </div>
          </div>
          <p id="ijazah-text">
            <b>Disse videnskaber er blandt andet:</b>
          </p>
        </section>

        <section className="ijazah">
          <div className="ijazah-body">
            <ul className="ijazah-sprite">
              <div className="ijazah-content">
                <li>Tajwid</li>
                <li>Mutashabihaat</li>
                <li>Versioner om den pågælende riwayah</li>
                <li>Viden indenfor start og slut recitationen</li>
                <li>Magtu' og mawsool</li>
              </div>
              <div className="ijazah-content">
                <li>Videnskaben om den Osmanniske skrift</li>
                <li>Fawasil og Dabt</li>
                <li>Lata'if'ala hamish al-tilawah</li>
                <li>
                  Subtile forskønnende recitationsvidenskaber (Nabr, ikhtilaas,
                  al-idkhaal, al-tamteet og al-tadh'eef)
                </li>
              </div>
            </ul>
          </div>
        </section>
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

export default Ijazah;
