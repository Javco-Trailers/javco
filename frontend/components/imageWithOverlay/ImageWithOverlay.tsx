// components/ImageWithOverlay.js

import React from 'react';
import Image from 'next/image';

interface ImageProps {
  imageUrl: string;
  text: string;
  alt: string;
}

const ImageWithOverlay: React.FC<ImageProps> = ({ imageUrl, text, alt }) => {
  return (
    <div className="relative">
      <Image src={imageUrl} alt={alt} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg font-bold mb-6">{text}</p>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
