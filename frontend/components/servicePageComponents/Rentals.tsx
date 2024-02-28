import React from "react";
import Link from "next/link";
import Image from "next/image";
import DryVanInside from "../../public/DryVanInside.jpg"
import DryVansLinedUp from "../../public/dryvansatdock.jpg"


const RentalsSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      
         <div className="flex flex-col h-1/6 p-4 justify-around md:flex-row">
      <Image className="p-2" src={DryVanInside.src} height={200} width={300} alt="Picture of the interior of a dry van"/>
      <Image className="p-2" src={DryVansLinedUp.src} height={200} width={600} alt="Picture of Dry Vans lined up at the docks"/>
    
     </div>
      <div className="max-w-3xl mx-auto text-center">
       

        <div className="m-4 p-4">
       
          <p className="text-left font-bold mb-4 text-black">
            Javco maintains a quality multi-brand rental fleet for both your
            short and long-term needs
          </p>
          <div className="border-t-2 border-jblue border-b-2">
            <ul>
              <li className="text-left  mb-4">
                <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                  Storage Trailers
                </h2>
                <ul>
                  <li className="ml-6 text-gray-600">
                    - Alleviate your cramped warehouse space with the security
                    and flexibility of a storage trailer. Javco will deliver
                    right to your dock or jobsite!
                    <Link className="text-jblue" href="tel:+12628359400">
                      {" "}
                      <u>Call</u>
                    </Link>{" "}
                    or
                    <Link
                      className="text-jblue"
                      href="mailto:info@javco.co?subject=Javco Inquiry"
                    >
                      {" "}
                      <u>email</u>
                    </Link>{" "}
                    now for a quote!
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          
  
          <div>
            <ul>
              <li className="text-left">
              <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                  Cartage & OTR Trailers
                </h2>
                <ul className="ml-6 text-gray-600">
                  - Javco maintains a quality multi-brand rental fleet of
                  cartage and OTR trailers. Fill out a credit application and
                  request a quote! Owner operators welcome!
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-start">
            <a
              className="text-jblue underline"
              href={"/creditApplication.pdf"}
              target="_blank"
              download
            >
              Download Credit Application PDF
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-black">
            Industries We Serve
          </h3>
          <ul className="text-lg text-gray-600 list-disc">
            <li className="text-gray-600 list-none">Manufacturing</li>
            <li className="text-gray-600 list-none">Shopping centers</li>
            <li className="text-gray-600 list-none">Lawn & garden</li>
            <li className="text-gray-600 list-none">Recycling centers</li>
            <li className="text-gray-600 list-none">Hotels</li>
            <li className="text-gray-600 list-none">Post bulk mail</li>
            <li className="text-gray-600 list-none">Construction sites</li>
            <li className="text-gray-600 list-none">Merchandizers</li>
            <li className="text-gray-600 list-none">Tradeshow conventions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RentalsSection;
