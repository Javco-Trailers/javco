// components/AboutUsSection.tsx
import React from "react";
import ImageWithOverlay from "../imageWithOverlay/ImageWithOverlay";
import salesLot from "../../public/picture-1-email-edited.jpg";

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center mb-2 font-bold text-black">About us</h1>
        <div className="mb-4">
          <ImageWithOverlay imageUrl={salesLot.src} alt="Truck" />
        </div>
        <p className="text-lg text-left font-semibold text-gray-600 mb-2 p-4">
          Javco Trailer Sales, Inc. was founded in 1984 by the unlikely duo of
          Avner Hizmi and John Griska. Avner, an Israeli immigrant, and John, a
          Pittsburgh-born yinzer and Vietnam veteran, crossed paths in the
          trailer industry and eventually forged a business partnership that
          endured a lifetime. John and Avner deftly operated in the Milwaukee
          and Chicago markets and gradually built a network of trusted vendors
          and customers.
        </p>
        <p className="text-lg text-left font-semibold text-gray-600 mb-4 p-4">
          In 1998, they purchased a parcel of land along I-94 and erected a
          5,000 square-foot building which serves as our base of operations to
          this day.
        </p>
        <p className="text-lg text-left font-semibold text-gray-600 mb-8 p-4">
          Avner passed away in November of 2011. John passed away in May of
          2022. We are forever indebted to their entrepreneurship, ingenuity,
          and mutual loyalty.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
