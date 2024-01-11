import React from 'react';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';
import truckOne from "../../public/truck_slide_1.jpg";


const RentalsSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
      
        <p className={`text-black text-lg font-bold mb-2`}>Rentals</p>
      
        <div className="mt-4 mb-4">
          <ImageWithOverlay imageUrl={truckOne.src} alt="Rentals"/>
        </div>
        <div className="m-4 p-4">
          <p className="text-left font-bold mb-4">Javco maintains a quality multi-brand rental fleet for both your short and long-term needs</p>
        <div className='border-t-2 border-jblue border-b-2'>
          <ul>
            <li className='text-left  mb-4'>
              <p className='font-semibold mb-2 mt-2'>Storage Trailers</p>
              <ul>
                <li className="ml-6">
                  - Alleviate your cramped warehouse space with the security and flexibility of a storage trailer.
                  Javco will deliver right to your dock or jobsite!
                </li>
              </ul>
            </li>
          </ul>
        </div>
    <div>
      <ul>
          <li className='text-left'>
            <p className='font-semibold mb-2 mt-2'>Cartage & OTR Trailers</p>
            <ul className='ml-6'>
              - Javco maintains a quality multi-brand rental feelt of cartage and OTR trailers. Fill out a credit application and request a quote. Owner operators welcome!
            </ul>
          </li>
         </ul>
         </div>
        </div>
      </div>
    </section>
  );
};

export default RentalsSection;
