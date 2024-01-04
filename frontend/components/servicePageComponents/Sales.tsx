import React from "react";
import ImageWithOverlay from "../imageWithOverlay/ImageWithOverlay";

const SalesSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-4">
          <ImageWithOverlay imageUrl="/" alt="Sales" text="Sales" />
        </div>
        <div className="m-4 p-2">
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
