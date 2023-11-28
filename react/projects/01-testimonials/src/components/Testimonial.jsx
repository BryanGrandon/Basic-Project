import React from "react";

function Testimonial(props) {
  return (
    <article className="testimonial-card">
      <section className="testimonial-card__image-container">
        <img src="" alt="" className="image" />
      </section>
      <section className="testimonial-card__information">
        <p className="information__text">
          <span className="information__name">{props.name}</span>
          <span className="information__country">{props.country}</span>
        </p>
        <p className="information__text">
          <span className="information__job-position">{props.jobPosition}</span>
          <span className="information__company">{props.company}</span>
        </p>
        <p className="information__testimonial">{props.testimonial}</p>
      </section>
    </article>
  );
}

export default Testimonial;
