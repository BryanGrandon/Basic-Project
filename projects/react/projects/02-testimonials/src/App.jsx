import "./styles/App.css";
import Testimonial from "./components/Testimonial";

function App() {
  const info = {
    name: "Shawn Wang",
    jobPosition: "software engineer",
    country: "Singapore",
    img: "https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png",
    testimonial:
      "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
  };

  return (
    <>
      <article className="testimonial-cards">
        <Testimonial
          name={info.name}
          country={info.country}
          image={info.img}
          jobPosition={info.jobPosition}
          testimonial={info.testimonial}
        />
      </article>
    </>
  );
}

export default App;
