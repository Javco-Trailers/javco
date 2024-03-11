import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import truckOne from "../../public/Picture-2-WhatsApp-part1edited.jpg";
import truckTwo from "../../public/Picture-2-WhatsApp-part2edited.jpg";

export default function Slideshow() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    afterChange: (index: number) => {},
  };

  return (
    <>
      <Slider>
        <div className="w-full mt-4 mx-auto">
          <Image
            src={truckOne}
            alt="Slide 1"
            width={1920}
            height={1080}
            className="object-cover w-full h-[40vh]"
            loading="lazy"
          />
        </div>
        <div className="w-full mt-4 mx-auto">
          <Image
            src={truckTwo}
            alt="Slide 2"
            width={1920}
            height={1080}
            className="object-cover w-full h-[40vh]"
            loading="lazy"
          />
        </div>
      </Slider>
    </>
  );
}
