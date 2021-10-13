import React from "react";
import hariImg from "../images/hari.jpeg";

function Home({
  onLinkClick,
}: {
  onLinkClick: (event: any, id: string) => void;
}) {
  return (
    <section
      id="home"
      className="bg-primary d-flex flex-column fullscreen py-5"
    >
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <div className="bg-white shadow rounded-pill p-2 mb-4 d-inline-block wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src={hariImg}
                title="I'm Hari"
                alt=""
                width="250"
              />
            </div>
            <h2 className="text-10 fw-600 mb-4">
              Hello! I'm Hari Tummala - Full Stack Software Engineer
            </h2>
            <p className="text-5 pb-3">
              based in Berlin, Germany.
            </p>
            <a
              onClick={(e) => onLinkClick(e, "about")}
              className="btn btn-dark rounded-0 smooth-scroll"
              href="about:blank"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
      <div className="container py-2 text-center">
        <a
          onClick={(e) => onLinkClick(e, "about")}
          className="scroll-down-arrow text-dark smooth-scroll"
          href="about:blank"
        >
          <span className="animated">
            <i className="fas fa-arrow-down" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Home;
