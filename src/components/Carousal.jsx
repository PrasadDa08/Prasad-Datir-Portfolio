import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousal = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img className="carousel-img" src="src/assets/images/prasad-img1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img className="carousel-img" src="src/assets/images/prasad-img2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img className="carousel-img" src="src/assets/images/prasad-img4.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Carousal;
