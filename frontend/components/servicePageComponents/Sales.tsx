import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';
import truckTwo from "../../public/truck_slide_2.jpg";

const SalesSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
      <p className={`text-black text-lg font-bold mb-2`}>Sales</p>
        <div className="mb-4">
          <ImageWithOverlay imageUrl={truckTwo.src} alt="Sales" />
        </div>
        <div className="font-semibold m-4 p-4">
          <p className="text-center">
            "Dive into the world of semi-trailers with Javco! Elevate your
            business game as we seamlessly guide you to the perfect
            semi-trailer, blending unbeatable quality with budget-friendly
            pricing. Your journey to optimal efficiency starts here, where
            excitement meets smart business decisions. Let's roll with Javco –
            where the thrill of the deal is as exciting as the road ahead!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
