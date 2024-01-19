// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-omos" id="footer-sprite">
          <h4>Om os</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            dolorem aspernatur distinctio sint quo officia culpa necessitatibus!
            Dolorem quas eveniet, rerum quos iste, aliquam illo temporibus nam
            hic deserunt est.
          </p>
        </div>
        <div className="footer-kontaktos" id="footer-sprite">
          <h4>Kontakt os</h4>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faMapMarker} />
              </span>
              <p></p>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p></p>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <p></p>
            </li>
          </ul>
        </div>
        <div className="footer-menu" id="footer-sprite">
          <h4>Menu</h4>
          <ul>{/* Add your footer menu links here */}</ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
