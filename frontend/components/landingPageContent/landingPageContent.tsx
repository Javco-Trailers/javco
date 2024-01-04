import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Javco Trailer Sales Inc.</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Your Premier Destination for Affordable and Exceptional Semi-Trailers!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:grid-cols-2">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Explore Our Fleet</h2>
          <p className="text-gray-600 mb-4">
            Immerse yourself in a gallery of top-quality semi-trailers, each designed to meet your diverse requirements. Our pictures showcase the reliability and versatility that define our offerings.
          </p>
          <h2 className="text-2xl font-bold mb-4">Affordable Solutions</h2>
          <p className="text-gray-600 mb-4">
            At Javco, affordability is at the core of our mission. Discover budget-friendly options without compromising on quality, ensuring your business thrives without breaking the bank.
          </p>
          <h2 className="text-2xl font-bold mb-4">Sales & Rentals</h2>
          <p className="text-gray-600 mb-4">
            Whether you're in search of storage solutions, cartage trailers, or over-the-road (OTR) giants, Javco has you covered. Our extensive and affordable inventory ensures you find the perfect match for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
