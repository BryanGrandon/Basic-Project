import "./styles/App.css";
import Testimonial from "./components/Testimonial";

function App() {
  const user1 = {
    name: "Shawn Wang",
    country: "Singapore",
    jobPosition: "software engineer",
    company: "amazon",
    img: "https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png",
    testimonial:
      "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
  };
  const user2 = {
    name: "Sarah Chima",
    country: "Nigeria",
    company: "ChatDesk",
    jobPosition: "software engineer",
    img: "https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png",
    testimonial:
      "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
  };
  const user3 = {
    name: "Emma Bostian",
    country: "Sweden",
    jobPosition: "software engineer",
    company: "Spotify",
    img: "https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png",
    testimonial:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
  };

  return (
    <>
      <article className="testimonial-cards">
        <Testimonial
          name={user1.name}
          country={user1.country}
          company={user1.company}
          image={user1.img}
          jobPosition={user1.jobPosition}
          testimonial={user1.testimonial}
        />
        <Testimonial
          name={user2.name}
          country={user2.country}
          company={user2.company}
          image={user2.img}
          jobPosition={user2.jobPosition}
          testimonial={user2.testimonial}
        />

        <Testimonial
          name={user3.name}
          country={user3.country}
          company={user3.company}
          image={user3.img}
          jobPosition={user3.jobPosition}
          testimonial={user3.testimonial}
        />
      </article>
    </>
  );
}

export default App;
