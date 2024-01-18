import { Link } from "react-router-dom";
import Navbar from "../Assets/NavbarHomePage"; // Import the Navbar component
import Footer from "../Assets/Footer"; // Import the Navbar component
import logo from "../Images/logo.png";
import course1 from "../Images/course1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import "./styles.css";

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <IconContext.Provider value={{ color: "#fff" }}>
          <Navbar />
        </IconContext.Provider>

        <div className="text-box">
          <img src="/Images/arabic-removebg-preview.png" alt="" />
          <p>
            "De bedste blandt jer muslimer er dem, der lærer Koranen og
            underviser i den."
          </p>
          <Link to="/programs/contactUs" className="btn">
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
            <FontAwesomeIcon icon={faGraduationCap} />
            <div className="label2">
              <h3>
                <span data-count="20">0</span>+
              </h3>
              <p>Hufadhs</p>
            </div>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faUser} />
            <div className="label2">
              <h3>
                <span data-count="100">0</span>+
              </h3>
              <p>elever</p>
            </div>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faUser} />
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

      <Footer />
    </div>
  );
};

export default HomePage;
