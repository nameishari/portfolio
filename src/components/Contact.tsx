import React from "react";
import { about } from "../data/config";

function Contact() {
  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"/>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="text-10 fw-600 mb-5">Let's get in touch</h2>
            <p className="text-5 mb-5">
              I enjoy discussing new projects and design challenges. You can
              contact me via email:{" "}
              <a href={`mailto:${about.email}`} className="text-reset">
                {about.email}
              </a>.
              You can also contact me using the below mentioned social media sites.
            </p>
            <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
              <li className="social-icons-github">
                <a
                  rel="noreferrer"
                  href="https://www.github.com/nameishari"
                  target="_blank"
                  title=""
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="social-icons-linkedin">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/nameishari"
                  target="_blank"
                  title=""
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="social-icons-facebook">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/nameisharii/"
                  target="_blank"
                  title=""
                >
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="social-icons-instagram">
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/name_is_hari/"
                  target="_blank"
                  title=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3"/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
