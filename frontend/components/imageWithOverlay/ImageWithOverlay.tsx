// components/ImageWithOverlay.js

import React from "react";
import Image from "next/image";

interface ImageProps {
  imageUrl: string;
  text?: string;
  alt: string;
  textColor?: string;
}

const ImageWithOverlay: React.FC<ImageProps> = ({
  imageUrl,
  text,
  alt,
  textColor,
}) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt={alt}
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className={`text-${textColor} text-lg font-bold mb-6`}>{text}</p>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
