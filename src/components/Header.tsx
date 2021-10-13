import React, { useState } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

function Header({
  onLinkClick,
}: {
  onLinkClick: (event: any, id: string) => void;
}) {
  const location = useLocation();
  const [navBarMobilePopupMode, setNavBarMobilePopupMode] = useState(false);
  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg text-uppercase navbar-line-under-text fw-600">
        <div className="container position-relative">
          <div className="col col-lg-8 navbar-accordion px-0">
            <button
              className={classNames("navbar-toggler", "ms-auto", {
                show: navBarMobilePopupMode,
              })}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#header-nav"
              onClick={() => setNavBarMobilePopupMode(!navBarMobilePopupMode)}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={classNames(
                "collapse",
                "navbar-collapse",
                "justify-content-center",
                { show: navBarMobilePopupMode }
              )}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className={classNames("nav-link", "smooth-scroll", {
                      active: !location.hash || location.hash === "#home",
                    })}
                    onClick={(e) => onLinkClick(e, "home")}
                    href="about:blank"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames("nav-link", "smooth-scroll", {
                      active: location.hash === "#about",
                    })}
                    onClick={(e) => onLinkClick(e, "about")}
                    href="about:blank"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames("nav-link", "smooth-scroll", {
                      active: location.hash === "#education",
                    })}
                    onClick={(e) => onLinkClick(e, "education")}
                    href="about:blank"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames("nav-link", "smooth-scroll", {
                      active: location.hash === "#experience",
                    })}
                    onClick={(e) => onLinkClick(e, "experience")}
                    href="about:blank"
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames("nav-link", "smooth-scroll", {
                      active: location.hash === "#skills",
                    })}
                    onClick={(e) => onLinkClick(e, "skills")}
                    href="about:blank"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={classNames("nav-link", "smooth-scroll", {
                      active: location.hash === "#contact",
                    })}
                    onClick={(e) => onLinkClick(e, "contact")}
                    href="about:blank"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end ps-0">
            <ul className="social-icons">
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
