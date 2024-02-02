import React from 'react';
import Link from 'next/link';
import ImageWithOverlay from '../imageWithOverlay/ImageWithOverlay';




const RentalsSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
      
        <p className={`text-black text-lg font-bold mb-2`}>Rentals</p>
      
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
                  <Link className='text-jblue' href="tel:+12628359400"> <u>Call</u></Link> or
                  <Link className='text-jblue' href="mailto:info@javco.co?subject=Javco Inquiry"> <u>email</u></Link> now for a quote!
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
              - Javco maintains a quality multi-brand rental fleet of cartage and OTR trailers. Fill out a credit application and request a quote! Owner operators welcome!
            </ul>
          </li>
         </ul>
         </div>
         <div className='flex justify-start items-start'>
        <a className='text-jblue underline' href={"/creditApplication.pdf"} target="_blank" download>Download Credit Application PDF</a>
        </div>
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

export default RentalsSection;
