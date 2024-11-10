import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../data/sliderData";

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  return (
    <div className="my-8 bg-stone-100 p-10">
      <Slider {...settings} >
        {sliderData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.img} alt={item.title} className="w-64 h-64 object-cover" />
            <h2 className="mt-4">{item.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Body;
