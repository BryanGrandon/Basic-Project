import "./styles/App.css";
import Testimonial from "./components/Testimonial";

const info = [
  {
    name: "Shawn Wang",
    jobPosition: "software engineer",
    country: "Singapore",
    img: "https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png",
  },
];

function App() {
  return (
    <>
      <article className="testimonial-cards">
        <Testimonial />
      </article>
    </>
  );
}

export default App;
