import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';
import truckTwo from "../../public/truck_slide_2.jpg";

const StorageSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
      <p className={`text-black text-lg font-bold mb-2`}>Storage</p>
        <div className='mt-4 mb-4'>
      <ImageWithOverlay imageUrl={truckTwo.src} alt="Storage"/>
      </div>
        <p className="text-lg text-gray-600 mb-8">
          Javco believes in providing the BEST solution for your temporary storage needs, ensuring seamless operations and cost-effective solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderFeature("Mobility", "Move your products where and when you want them.")}
          {renderFeature("Flexibility", "Get storage when you want it, for as long as you want it.")}
          {renderFeature("Timely", "Same-day storage availability, delivered right to you.")}
          {renderFeature("Security", "Ensure your products are protected, and track their location in real-time.")}
          {renderFeature("Affordable", "Save on warehouse costs, transportation fees, and enhance operational performance.")}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
          <ul className="text-lg text-gray-600 list-disc">
            <li>Manufacturing</li>
            <li>Shopping centers</li>
            <li>Lawn & garden</li>
            <li>Recycling centers</li>
            <li>Hotels</li>
            <li>Post bulk mail</li>
            <li>Construction sites</li>
            <li>Merchandizers</li>
            <li>Tradeshow conventions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const renderFeature = (title:string, description:string) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default StorageSection;