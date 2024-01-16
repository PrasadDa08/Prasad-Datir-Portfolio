import React from "react";
import Typewriter from "typewriter-effect";
import Carousal from "./Carousal";
import Background from "./Background";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <Background />
      <div className="intro">
        <h1>Prasad N. Datir</h1>
        {
          <Typewriter
            options={{
              strings: ["Full-stack Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        }
        <p>
          Hello there! 👋 I'm a passionate and results-driven full-stack web
          developer with a love for crafting high-quality digital experiences. I
          thrive on turning innovative ideas into reality and enjoy the
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
  );
}

export default Home;
