import React from 'react';
import { Image } from 'react-native-web';

export default function LogoImage({ width = 100 }) {
  // Imagen de logo es de 3500 x 946 pxs.
  return (
    <Image
      style={{ width: `${width}px`, height: `${(width * 945) / 3500}px` }}
      source="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
    />
  );
}
