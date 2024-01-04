// components/AboutUsSection.tsx
import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';
import truckImage from '../../public/truck_slide_1.jpg';
import Ethan from '../../public/Ethan.jpeg';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-4">
          <ImageWithOverlay imageUrl={truckImage.src} alt="Truck" />
        </div>
        <p className="text-lg font-semibold text-gray-600 mb-8 p-4">
          Javco has proudly served the Milwaukee and Chicago markets for over 30 years. Our commitment to excellence has made us a trusted provider of semi-trailers for a diverse range of clients, including Fortune 500 companies, regional and local manufacturers, family-owned businesses, and private individuals.
        </p>
        <ImageWithOverlay imageUrl={Ethan.src} alt='Ethan'/>
        {/* Add more content as needed */}
      </div>
    </section>
  );
};

export default AboutUsSection;
