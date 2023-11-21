import React from "react";

function Testimonial() {
  return (
    <article className="testimonial">
      <section className="testimonial__picture">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png"
          alt=""
          className="testimonial__picture_img"
        />
      </section>
      <section className="testimonial__info">
        <section className="info__personal">
          <p className="info__personal_name">Shawn Wang</p>
          <p className="info__personal_job-position">software engineer</p>
        </section>

        <section className="info__text">
          <p className="info__text_testimonial"></p>
        </section>
      </section>
    </article>
  );
}

export default Testimonial;
