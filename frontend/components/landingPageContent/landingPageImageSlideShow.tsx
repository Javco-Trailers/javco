
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import javcoSign from "../../public/JavcoSign.jpg"
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
      src={javcoSign}
      alt="Slide 1"
      width={1920}
      height={1080}
      className="object-cover w-full h-[40vh]"
    />
  </div>
  <div className="w-full mt-4 mx-auto">
    <Image
      src={truckTwo}
      alt="Slide 2"
      width={1920}
      height={1080}
      className="object-cover w-full h-[40vh]"
    />
  </div>
</Slider>

    </>
  )
}