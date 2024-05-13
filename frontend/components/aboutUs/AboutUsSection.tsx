// components/AboutUsSection.tsx
import React from "react";
import Image from "next/image";
import salesLot from "../../public/picture-1-email-edited-min.jpg";
import YoungFounders from "../../public/FoundersWhenYoung-min.jpg";
import Memorial from "../../public/JavcoFounders-min.jpg";
import Aerial from "../../public/AerialPic-min.jpg";

interface AboutUsSectionProps {
  parsedText: any;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ parsedText }) => {
  const aboutUsText = parsedText.text.About_Us_Page;

  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-4 font-bold text-jblue">
          {aboutUsText.Main_Header}
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
          {aboutUsText.Paragraph_One}
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
          {aboutUsText.Paragraph_Two}
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
          {aboutUsText.Paragraph_Three}
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
