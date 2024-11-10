import React from 'react';
import "../../style/skills.css";
import Frontened from './Frontened';
import Backened from './Backened';

function Skills() {
  return (
    <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
          <div className="skills__container container grid">
                <Frontened/>
                <Backened/>
          </div>
    </section>
  )
}

export default Skills