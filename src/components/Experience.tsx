import React from "react";
import { experience } from "../data/config";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="text-center">
          <span className="bg-primary text-dark px-2">experience</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5">
          A summary of my work experience
        </h2>

        <div className="row g-5 mt-2">
          <div className="col-lg-12">
            <div className="border-start border-2 border-primary ps-3">
              {experience.map((ex, index) => {
                return (
                  <div key={`${ex.company}${index}`}>
                    <h3 className="text-5">{ex.designation}</h3>
                    <p className="mb-2">
                      <a
                        href={ex.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-reset"
                      >
                        {ex.company}
                      </a>
                      {` / ${ex.duration} / ${ex.location}`}
                    </p>
                    <p className="text-muted">
                      <ul>
                        {ex.details.map((d) => {
                          return <li key={d}>{d}</li>;
                        })}
                        <li>
                          <b>Tech Stack: </b>
                          {ex.techStack}
                        </li>
                      </ul>
                    </p>
                    {index + 1 !== experience.length && <hr className="my-4" />}
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

export default Experience;
