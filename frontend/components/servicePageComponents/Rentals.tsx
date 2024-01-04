import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';

const RentalsSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mt-4 mb-4">
          <ImageWithOverlay imageUrl="/" alt="Rentals" text="Rentals" />
        </div>
        <div className="m-4 p-2">
          <p className="text-center">Need a semi-trailer for a short time?</p>
          <p className="text-center">For who knows how long?</p>
          <p className="text-center">
            "Every day, Javco revolutionizes customer experiences, offering dynamic rental agreements designed to exceed expectations. Our commitment to flexibility means we're not just meeting needs, we're exceeding them—making business exciting and tailored just for you!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default RentalsSection;
