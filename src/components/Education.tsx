import React from "react";
import { education } from "../data/config";

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="text-center">
          <span className="bg-primary text-dark px-2">education</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5">
          My educational background
        </h2>

        <div className="row g-5 mt-2">
          <div className="col-lg-12">
            <div className="border-start border-2 border-primary ps-3">
              {education.map((ed, index) => {
                return (
                  <div key={ed.degree}>
                    <h3 className="text-5">{ed.degree}</h3>
                    <p className="mb-2">
                      <a
                        href={ed.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-reset"
                      >
                        {ed.institution}
                      </a>
                      {` / ${ed.duration} / ${ed.location}`}
                    </p>
                    <p className="text-muted">
                      <ul>
                        {ed.details.map((d) => {
                          return <li key={d}>{d}</li>;
                        })}
                      </ul>
                    </p>
                    {index + 1 !== education.length && <hr className="my-4" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
