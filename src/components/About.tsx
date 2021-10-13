import React from "react";
import { about } from "../data/config";

const dateDiffWithToday = (date: String) => {
  const seperatedDate = date.split("-");
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const yy = parseInt(seperatedDate[0]);
  const mm = parseInt(seperatedDate[1]);
  const dd = parseInt(seperatedDate[2]);
  let years, months, days;
  // months
  months = month - mm;
  if (day < dd) {
    months = months - 1;
  }
  // years
  years = year - yy;
  if (month * 100 + day < mm * 100 + dd) {
    years = years - 1;
    months = months + 12;
  }
  // days
  days = Math.floor(
    (today.getTime() - new Date(yy + years, mm + months - 1, dd).getTime()) /
      (24 * 60 * 60 * 1000)
  );

  return { years: years, months: months, days: days };
};

function About() {
  const expDateDiff = dateDiffWithToday("2015-06-30");
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="text-center mb-2">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5">
          Know me more
        </h2>

        <div className="row">
          <div className="col-lg-8 text-center text-lg-start">
            <h2 className="text-8 fw-400 mb-3">
              Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
                {about.name}
              </span>
            </h2>
            <p className="text-5">{about.details}</p>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
          >
            <div className="featured-box style-4">
              <div className="featured-box-icon fw-500 bg-primary rounded-circle">
                <span className="wow heartBeat" data-wow-delay="1.3s">
                  {expDateDiff.years}
                  {expDateDiff.months > 0 && <span>+</span>}
                </span>
              </div>
              <h3 className="text-7 wow rubberBand" data-wow-delay="2s">
                Years of <span className="fw-700">Experience</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3" >
            <p className="text-muted fw-500 mb-0">Name:</p>
            <p className="text-4 text-dark fw-600 mb-0">Hari Tummala</p>
          </div>
          <div className="col-6 col-lg-3">
            <p className="text-muted fw-500 mb-0">Date of birth:</p>
            <p className="text-4 text-dark fw-600 mb-0">{about.dateOfBirth}</p>
          </div>
          <div className="col-6 col-lg-3 ">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">{about.from}</p>
          </div>
          <div className="col-6 col-lg-3 ">
            <p className="text-muted fw-500 mb-0">Current Location:</p>
            <p className="text-4 text-dark fw-600 mb-0">{about.currentLocation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
