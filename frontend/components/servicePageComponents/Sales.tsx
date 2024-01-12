import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';
import lot from "../../public/Picture-1-WhatsApp-edited.jpg";

const SalesSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
      <p className={`text-black text-lg font-bold mb-2`}>Sales</p>
        <div className="mb-4">
          <ImageWithOverlay imageUrl={lot.src} alt="Sales" />
        </div>
        <div className="font-semibold m-4 p-4">
          <p className="text-left">
            - Get the right trailer for the right price! Javco is a licensed dealer of used dry vans, reefers, flatbed, and tanker trailers.
            Callor email NOW and ask about our current inventory!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
