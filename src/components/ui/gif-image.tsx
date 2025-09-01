import React from 'react';
import { cn } from '@/lib/utils';

interface GifImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
}

const GifImage: React.FC<GifImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc,
  loading = 'lazy',
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={handleError}
      className={cn('w-full h-full object-cover', className)}
    />
  );
};

export default GifImage;
