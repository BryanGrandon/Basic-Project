import "../styles/Testimonial.css";
import React from "react";

function Testimonial() {
  return (
    <article className="testimonial-card">
      <section className="testimonial-card__image">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png"
          alt=""
          className="image"
        />
      </section>
      <section className="testimonial-card__information">
        <p className="information__name-country">
          <span className="information__name">Shawn Wang </span>
          in
          <span className="information__country"> Singapore</span>
        </p>
        <p className="information__job-position">software engineer</p>
        <p className="information__testimonial">
          "It's scary to change careers. I only gained confidence that I could
          code by working through the hundreds of hours of free lessons on
          freeCodeCamp. Within a year I had a six-figure job as a Software
          Engineer. freeCodeCamp changed my life."
        </p>
      </section>
    </article>
  );
}

export default Testimonial;
