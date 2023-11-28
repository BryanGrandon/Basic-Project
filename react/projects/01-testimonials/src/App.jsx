import Testimonial from "./components/Testimonial";
import "./styles/App.css";

function App() {
  return (
    <>
      <article className="testimonial">
        <h2 className="testimonial__title">Testimonials</h2>
        <section className="testimonial__cards">
          <Testimonial
            name="Shawn Wang"
            country="Singapore"
            jobPosition="Software Engineer"
            company="Amazon"
            testimonial="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
            image="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png"
          />
          <Testimonial
            name="Sarah Chima"
            country="Nigeria"
            jobPosition="software engineer"
            company="Spotify"
            testimonial="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
            image="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png"
          />
          <Testimonial
            name="Emma Bostian"
            country="Sweden"
            jobPosition="software engineer"
            company="ChatDesk"
            testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
            image="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png"
          />
        </section>
      </article>
    </>
  );
}

export default App;
