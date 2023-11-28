import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <article className="testimonial">
        <h2 className="testimonial__title">Testimonials</h2>
        <section className="testimonial__cards">
          <Testimonial
            name="Shawn Wang"
            country="Singapore"
            jobPosition="software Engineer"
            company="Amazon"
            testimonial="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
            image="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png"
          />
        </section>
      </article>
    </>
  );
}

export default App;
