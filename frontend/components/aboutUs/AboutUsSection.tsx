// components/AboutUsSection.tsx
import React from "react";
import Image from "next/image";
import salesLot from "../../public/picture-1-email-edited.jpg";
import YoungFounders from "../../public/FoundersWhenYoung.jpg";
import Memorial from "../../public/JavcoFounders.jpg";
import Aerial from "../../public/AerialPic.jpg";

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-4 font-bold text-jblue">
          About us
        </h1>
        <div className="flex justify-center items-center mb-4">
          <Image
            height={400}
            width={500}
            src={YoungFounders.src}
            alt="Founders of Javco when younger at a desk discussing business"
            loading="lazy"
          />
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
        <div className="flex justify-center items-center mb-4">
          <Image
            height={400}
            width={500}
            src={salesLot.src}
            alt="Original Sales lot of Javco that shows the start of the business and its small beginnings"
            loading="lazy"
          />
        </div>
        <p className="text-lg text-left font-semibold text-gray-600 mb-4 p-4">
          In 1998, they purchased a parcel of land along I-94 and erected a
          5,000 square-foot building which serves as our base of operations to
          this day.
        </p>
        <div className="flex justify-center items-center mb-4">
          <Image
            height={200}
            width={400}
            src={Aerial.src}
            alt="An aerial shot of the Javco premises"
            loading="lazy"
          />
        </div>
        <p className="text-lg text-left font-semibold text-gray-600 mb-8 p-4">
          Avner passed away in November of 2011. John passed away in May of
          2022. We are forever indebted to their entrepreneurship, ingenuity,
          and mutual loyalty.
        </p>
        <div className="flex justify-center items-center mb-4">
          <Image
            height={400}
            width={500}
            src={Memorial.src}
            alt="The founders Avner and John looking dapper in suits later in life after starting a successful business"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
