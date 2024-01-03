import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick}  className={className} style={{...style, display:"block", background:"red"}} >Next</div>
    )
}
const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick}  className={className} style={{...style, display:"block", background:"green"}} >Back</div>
    )
}

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);

  // handle side effects
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipies(specials);
      });
  }, []);

  // slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      ],
      nextArrow: <simpleNextArrow />,
    prevArrow:<simplePrevArrow/>
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <h2 className="subtitle">Special Dishes</h2>
        <h2 className="title">Standout Dishes From Our Menu</h2>
      </div>

          {/* next prev buttons */}
          <div className="md:absolute right-3 top-8 mb-10 md:mr-16">
              <button onClick={() => slider?.current?.slickPrev()}
              className="btn p-2 rounded-full  bg-white text-green "
              >
                  <FaAngleLeft className="w-8 h-8 p-1"/>
              </button>
              <button onClick={() => slider?.current?.slickNext()}
                  className="btn p-2 bg-white text-green rounded-full ml-3">
                 <FaAngleRight className="w-8 h-8 p-1"/>
              </button>
          </div>


          {/* map recipies */}
      <Slider {...settings} ref={slider} className="mt-16 overflow-hidden">
        {recipies?.map((item, idx) => (
          <Cards key={idx} item={item}></Cards>
        ))}
      </Slider>
    </div>
  );
};
export default SpecialDishes;
