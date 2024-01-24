import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousal = (props) => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img className="carousel-img" src={props.img} />
      </div>
      <div>
        <img className="carousel-img" src={props.img} />
      </div>
      <div>
        <img className="carousel-img" src={props.img} />
      </div>
    </Carousel>
  );
};

export default Carousal;
