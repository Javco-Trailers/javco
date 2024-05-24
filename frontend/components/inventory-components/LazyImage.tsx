import React from 'react';
import Image from 'next/image';

interface LazyImageProps {
  width: number;
  height: number;
  alt: string;
  src: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ width, height, alt, src, className }) => {
  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={src}
      className={className}
    />
  );
};

export default LazyImage;
