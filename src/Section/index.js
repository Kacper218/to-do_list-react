import React from 'react';
import "./style.css";

const Section = ({ extraTitle, body }) => {
  if (extraTitle) {
    return (
      <section className="section">
        <h2 className="section__header">{extraTitle}</h2>
        <div className="section__body">
          {body}
        </div>
      </section>
    )
  }
  return (
      <section className="section">
        <div className="section__body">
          {body}
        </div>
      </section>
  )
};

export default Section;