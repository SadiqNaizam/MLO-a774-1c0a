import React from 'react';
import { cn } from '@/lib/utils'; // For conditional class names

interface AppLogoProps {
  src: string; // Source URL for the logo image
  alt?: string; // Alt text for the logo
  className?: string; // Optional additional classes for styling
  width?: number; // Optional width
  height?: number; // Optional height
}

const AppLogo: React.FC<AppLogoProps> = ({
  src,
  alt = 'Application Logo',
  className,
  width = 120, // Default width
  height, // Height can be auto or specified
}) => {
  console.log("Rendering AppLogo with src:", src);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height} // If height is not provided, it will scale proportionally based on width
      className={cn("object-contain", className)} // 'object-contain' ensures the logo fits without cropping
      onError={(e) => {
        // Fallback to a placeholder or hide if the image fails to load
        console.error("Error loading logo:", src);
        (e.currentTarget.src = '/placeholder.svg'); // Assuming a public placeholder image
        (e.currentTarget.alt = 'Placeholder Logo');
      }}
    />
  );
};

export default AppLogo;