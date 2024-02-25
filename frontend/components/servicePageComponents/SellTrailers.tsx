import React from "react";


const SellTrailers = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className={`text-black text-lg font-bold mb-2`}>
          Sell Your Trailers to Javco
        </p>
        <div className="font-semibold m-4 p-4">
          <p className="text-center text-gray-600">
            Thinking of selling your trailer? Javco is always looking for quality inventory at a fair price.
            Whether you want to trade-in or just downsize your fleet, we'll make the process easy and pain-free.
            Tell us what you have <a className="underline font-semibold text-jblue" href="mailto:info@javco.co?subject=Javco Inquiry For Selling Trailer" target="_blank">HERE</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellTrailers;
