import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Carousal;
