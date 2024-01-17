import Typewriter from "typewriter-effect";
import Carousal from "./Carousal";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="intro">
          <h1>Prasad N. Datir</h1>
          {
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer", "MERN Stack"],
                autoStart: true,
                loop: true,
              }}
            />
          }
          <div className="mobile-clipart"></div>
          <p>
            Hello there! 👋 I'm a passionate and results-driven full-stack web
            developer with a love for crafting high-quality digital experiences.
            I thrive on turning innovative ideas into reality and enjoy the
            challenges that come with building robust and scalable web
            applications.
          </p>

          <Link to="/about" className="next-button">
            <button>Next Page</button>
          </Link>
        </div>
        <div className="profile">
          <Carousal />
        </div>
      </div>
      {/* <div className="clip-art"></div> */}
    </>
  );
}

export default Home;
