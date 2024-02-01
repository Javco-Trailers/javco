import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';
import truckTwo from "../../public/truck_slide_2.jpg";

const SellTrailers = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className={`text-black text-lg font-bold mb-2`}>Sell Your Trailers to Javco</p>
        <div className="font-semibold m-4 p-4">
          <p className="text-center">
            "Thinking of selling your trailers? Choose Javco as your trusted partner. We offer a seamless process for selling your trailers, providing a blend of fair pricing and reliable service. Javco ensures that your journey in selling trailers is not just profitable but also hassle-free. Let's make the deal exciting – sell your trailers to Javco today!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellTrailers;
