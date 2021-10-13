import React from "react";
import { skills } from "../data/config";

function Skills() {
  const skillsMiddleIndex = Math.ceil(skills.length / 2);

  const skillsLeft = skills.slice().splice(0, skillsMiddleIndex);
  const skillsRight = skills.slice().splice(skillsMiddleIndex);

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="text-center">
          <span className="bg-primary text-dark px-2">skills</span>
        </p>
        <h2 className="text-7 fw-600 text-center mb-5">
          Some tools and technologies I'm familiar with
        </h2>

        <div className="row gx-5">
          <div className="col-md-6">
            {skillsLeft.map((s) => {
              return (
                <div key={s.name}>
                  <p className="fw-500 text-start mb-2">{s.name}</p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${s.level}%` }}
                      aria-valuenow={s.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            {skillsRight.map((s) => {
              return (
                <div key={s.name}>
                  <p className="fw-500 text-start mb-2">{s.name}</p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${s.level}%` }}
                      aria-valuenow={s.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
